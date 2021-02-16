import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Swit} from "react-router-dom"

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
        <Route exact path="/" component={Home} />
      
        <Route path="/roster" component={Roster} />
        <Route path="/schedule" component={Schedule} />
      </Switch>
      {/* <ROw>
        <> */}
      /addtocart/:nam? addtocart /checkout/:name? checkout / products =>
      checkout addtocart
    </div>
  );
}

export default App;
