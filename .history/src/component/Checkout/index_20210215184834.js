import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { withRouter } from "react-router";


 function Checkout(props) {
      const [productsList, setProductsList] = useState({});

useEffect(() => {
    axios.get(`https://product-display-556dc-default-rtdb.firebaseio.com/products/${props.location.state}.json`).then(response => {
        console.log(response.data)
    }).catch(error => {
        console.log(error)
    })
}, [])

console.log(props.location.state)
    
    return (
      <div>
        {productsList.products &&
          Object.entries(productsList.products).map((Checkout) => (
            <div
              style={{
                border: "2px solid red",
                marginBottom: "20px",
              }}
              key={Checkout[0]}
            >
              <div>
                {Checkout[1].name}
                <br />
                {Checkout[1].description}
                <br />
                {Checkout[1].price}
                <br />
                <img
                  src={Checkout[1] && Checkout[1].imageUrl}
                  alt="product_image"
                />
              </div>
            </div>
          ))}
      </div>
    );
}
export default withRouter(Checkout);
