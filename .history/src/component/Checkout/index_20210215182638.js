import React from 'react'

export default function Checkout(props) {
useEffect(() => {
    axios.get('https://product-display-556dc-default-rtdb.firebaseio.com/products.json').then(response => {
        console.log(response.date)
    })
}, [])
    
    return (

        <div>
            
        </div>
    )
}
