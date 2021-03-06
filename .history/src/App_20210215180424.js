import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Switch, Route } from "react-router-dom"
import Checkout from './component/Checkout/index'
import Product from './component/Product/index'
import AddToCart from './component/AddToCart/index'

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Product} />

        <Route exact path="/add-to-cart" component={AddToCart} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
      /addtocart/:nam? addtocart /checkout/:name? checkout / products =
      checkout addtocart
    </div>
  );
}

export default App;
