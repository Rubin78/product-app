import React, {useEffect} from 'react'
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
            
        </div>
    )
}
