import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Switch, Route } from "react-router-dom"
import Checkout from './component/Checkout/index'
import Product from './component/Product/index'
import AddToCart from './component/AddToCart/index'

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
      <Switch>
        <Route exact path="/" component={product} />
      
        <Route exact path="/AddTo" component={Roster} />
        <Route exact path="/schedule" component={Schedule} />
      </Switch>
      
      
      /addtocart/:nam? addtocart /checkout/:name? checkout / products =>
      checkout addtocart
    </div>
  );
}

export default App;
