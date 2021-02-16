import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Product() {
  const [productsList, setProductsList] = useState({})

  useEffect(() => {
      axios.get('https://product-display-556dc-default-rtdb.firebaseio.com/.json').then(response => {
        setProductsList(response.data)
      }).catch(error => {
        console.log(error)
      })
    }, [])

  console.log(productsList)

  return (
      <div>
          {productsList.products && Object.entries(productsList.products).map(product => (
            <div style={{
              border: '2px solid red'
            }}>
              {product[1].name}<br />
              {product[1].description}<br />
              {product[1].price}<br />
              {product[1].imageUrl}<br />
            </div>
          ))}
      </div>
  )
}
