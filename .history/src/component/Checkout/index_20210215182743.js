import React from 'react'

export default function Checkout(props) {
// useEffect(() => {
//     axios.get('https://product-display-556dc-default-rtdb.firebaseio.com/products.json').then(response => {
//         console.log(response.data)
//     }).catch(error => {
//         conmouseleave.log(error)
//     })
// }, [])

console.log(props.location.state)
    
    return (

        <div>
            Checkout page
        </div>
    )
}
