import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { withRouter } from "react-router";


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
   <div className="col-md-6" style={{ padding: 20 }}>
             
            <img src={checkoutData.imageUrl} alt="product-image" /></div>

                            <div className="col-md-6" style={{ padding: 20 }}>

            <div>{checkoutData.name}</div>
            <div>{checkoutData.description}</div>
            <div>{checkoutData.price}</div>
          </>
        )}
      </div>
    );
}
export default withRouter(Checkout);
