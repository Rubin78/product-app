import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Row, Container } from "react-bootstrap";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Aos from "aos";
import { withRouter } from "react-router";

function Product(props) {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const [productsList, setProductsList] = useState({});

  useEffect(() => {
    axios
      .get("https://product-display-556dc-default-rtdb.firebaseio.com/.json")
      .then((response) => {
        setProductsList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      {productsList.products &&
        Object.entries(productsList.products).map((product) => (
          <div
            style={{
              background: "#f5f5f5",
            }}
            key={product[0]}
          >
            <div className="productcards" style={{}}>
              <Row>
                <div
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className="col-md-6"
                  style={{ padding: 20 }}
                >
                  {" "}
                  <img
                    src={product[1] && product[1].imageUrl}
                    alt="product_image"
                  />
                </div>
                <div
                  className="col-md-6"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ padding: 10, fontSize: 34 }}>
                    {" "}
                    {product[1].name}
                  </div>
                  <br />
                  <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    style={{ padding: 10, fontSize: 22 }}
                  >
                    {product[1].description}
                  </div>
                  <br />
                  <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    style={{ padding: 10, fontSize: 22 }}
                  >
                    $ {product[1].price}
                  </div>

                  <div
                    style={{
                      height: 120,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      data-aos="zoom-out-right"
                      style={{
                        height: 55,
                        width: 120,
                        borderRadius: 8,
                        fontSize: 18,
                        background: "white",
                        borderColor: "black",
                        borderWidth: 2,
                      }}
                      onClick={() => {
                        props.history.push("/checkout", product[0]);
                      }}
                    >
                      <span>Checkout</span>
                    </button>
                    &nbsp;
                    <button
                      data-aos="zoom-out-left"
                      style={{
                        height: 55,
                        width: 120,
                        borderRadius: 8,
                        fontSize: 18,
                        background: "white",
                        borderColor: "black",
                        borderWidth: 2,
                      }}
                      onClick={() => {
                        props.history.push("/add-to-cart", product[0]);
                      }}
                    >
                      <span> Add to cart</span>
                    </button>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        ))}
    </div>
  );
}

export default withRouter(Product);
