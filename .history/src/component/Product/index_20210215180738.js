import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Product() {
  const [productsList, setProductsList] = useState([])

  useEffect(() => {
      axios.get('https://product-display-556dc-default-rtdb.firebaseio.com/.json').then(response => {
        setProductsList(response.data)
      }).catch(error => {
        console.log(error)
      })
    }, [])

    return (
        <div>
            {productsList.length  && productsList.map(product => (
              <div>
                {product.name}<br />
                {product.description}<br />
                {product.description}<br />
              </div>
            ))}
        </div>
    )
}
