import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Button ,Row } from 'react-bootstrap';


import { withRouter } from "react-router";

function Product(props) {
  const [productsList, setProductsList] = useState({})

  useEffect(() => {
      axios.get('https://product-display-556dc-default-rtdb.firebaseio.com/.json').then(response => {
        setProductsList(response.data)
      }).catch(error => {
        console.log(error)
      })
    }, [])

  return (
    <Container fluid>
    <div>
      {productsList.products &&
        Object.entries(productsList.products).map((product) => (
          <div
            style={{
              border: "2px solid red",
              marginBottom: "20",
              background: "red",
            }}
            key={product[0]}
          >
            <div className="productcards" style={{}}>
              <Row>
                <div className="col-md-6" style={{ padding: 20 }}>
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
                  <div style={{ padding: 10, fontSize: 22 }}>
                    {product[1].description}
                  </div>
                  <br />
                  <div style={{ padding: 10, fontSize: 22 }}>
                    $ {product[1].price}
                  </div>

                  <div style={{height:200,display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <button
                      style={{
                        height: 55,
                        width: 120,
                        borderRadius: 15,
                        fontSize: 18,
                        background: "white",
                        borderColor: "black",
                        border: 2,
                      }}
                      onClick={() => {
                        props.history.push("/checkout", product[0]);
                      }}
                    >
                      <span>Checkout</span>
                    </button>
                    &nbsp;
                    <button
                      style={{
                        height: 55,
                        width: 120,
                        borderRadius: 15,
                        fontSize: 18,
                        background: "white",
                        borderColor: "black",
                        border: 2,
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
    </Container>
  );
}

export default withRouter(Product)
