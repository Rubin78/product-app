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
        {checkoutData &&
          Object.entries(checkoutData).map((checkout) => (
            console.log(checkout[])
            // <div
            //   style={{
            //     border: "2px solid red",
            //     marginBottom: "20px",
            //   }}
            //   key={checkout[0]}
            // >
            //   <div>
            //     {checkout[1] && checkout[1].name}
            //     <br />
            //     {checkout[1] && checkout[1].description}
            //     <br />
            //     {checkout[1] && checkout[1].price}
            //     <br />
            //     <img
            //       src={Checkout[1] && Checkout[1].imageUrl}
            //       alt="product_image"
            //     />
            //   </div>
            // </div>
          ))}
      </div>
    );
}
export default withRouter(Checkout);
