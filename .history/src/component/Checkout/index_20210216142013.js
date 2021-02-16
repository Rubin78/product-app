import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { withRouter } from "react-router";
import { Button, Row, Container } from "react-bootstrap";



 function Checkout(props) {
      const [checkoutData, setCheckoutData] = useState({});

useEffect(() => {
    axios.get(`https://product-display-556dc-default-rtdb.firebaseio.com/products/${props.location.state}.json`).then(response => {
      setCheckoutData(response.data)
    }).catch(error => {
        console.log(error)
    })
}, [])

    console.log(checkoutData)
    return (
      <div>
        {checkoutData && (
          <>
            <Row>
              <div className="col-md-6" style={{ padding: 20 }}>
                <img src={checkoutData.imageUrl} alt="product-image" />
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
                 <div
                    style={{
                      height: 120,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      style={{
                        height: 55,
                        width: 120,
                        borderRadius: 8,
                        fontSize: 18,
                        background: "white",
                        borderColor: 'black',
                        borderWidth: 2,
                        
                      }}
                      onClick={() => {
                        props.history.push("/checkout", product[0]);
                      }}
                    >
                      <span>Checkout</span>
                    </button>
                 

                
              </div>
            </Row>
          </>
        )}
      </div>
    );
}
export default withRouter(Checkout);
