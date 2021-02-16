import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

useEffect(() => {
  axios.get('https://product-display-556dc-default-rtdb.firebaseio.com/.json').then(response => {
    console.log(response.data)
  }).catch(error => {
    console.log(error)
  })
}, [])

function App() {

  return (
    <div className="App">
      {/* <ROw>
        <> */}
        /addtocart   addtocart
        /checkout    checkout
        /            sign up
        /login       login
        /products    products   
    </div>
  );
}

export default App;
