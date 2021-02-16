import React, { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { Button, Row, Container } from "react-bootstrap";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Aos from "aos";

function Checkout(props) {
  const [checkoutData, setCheckoutData] = useState({});

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://product-display-556dc-default-rtdb.firebaseio.com/products/${props.location.state}.json`
      )
      .then((response) => {
        setCheckoutData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(checkoutData);
  return (
    <div style={{ padding: 20, height: "100vh", background: "#f5f5f5" }}>
      {checkoutData && (
        <>
          <Row>
            <div className="col-md-6" style={{ padding: 20 }}>
              <img
                src={checkoutData.imageUrl}
                alt="product-image"
                style={{ height: 510 }}
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
                {checkoutData.name}
              </div>
              <br />
              <div style={{ padding: 10, fontSize: 22 }}>
                {checkoutData.description}
              </div>
              <br />
              <div style={{ padding: 10, fontSize: 22 }}>
                $ {checkoutData.price}
              </div>
            </div>
          </Row>
        </>
      )}
    </div>
  );
}
export default withRouter(Checkout);
