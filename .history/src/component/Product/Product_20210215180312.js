import React from 'react'

export default function Product() {
    useEffect(() => {
        axios.get('https://product-display-556dc-default-rtdb.firebaseio.com/.json').then(response => {
          console.log(response.data)
        }).catch(error => {
          console.log(error)
        })
      }, [])
      
    return (
        <div>
            
        </div>
    )
}
