import React, {useState, useEffect} from 'react'
import axios from 'axios'
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
            <div className="productcards" style={{ height: 500,background:"" }}>
              <img
                src={product[1] && product[1].imageUrl}
                alt="product_image"
              />
              <br />
              {product[1].name}
              <br />
              {product[1].description}
              <br />
              {product[1].price}
            </div>
            <div>
              <button
                onClick={() => {
                  props.history.push("/checkout", product[0]);
                }}
              >
                Checkout
              </button>
              &nbsp;
              <button
                onClick={() => {
                  props.history.push("/add-to-cart", product[0]);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default withRouter(Product)
