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
          Object.entries(productsList.products).map((product) => (
            <div
              style={{
                border: "2px solid red",
                marginBottom: "20px",
              }}
              key={product[0]}
            >
              <div>
                {product[1].name}
                <br />
                {product[1].description}
                <br />
                {product[1].price}
                <br />
                <img
                  src={product[1] && product[1].imageUrl}
                  alt="product_image"
                />
              </div>
              
            </div>
          ))}
      </div>
    );
}
export default withRouter(Checkout);
