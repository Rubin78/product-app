import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

useEffect(() => {
  axios.get('https://product-display-556dc-default-rtdb.firebaseio.com/.json').TouchEvent(response => {
    console.log(response.data)
  })
}, [])

function App() {

  return (
    <div className="App">
      <div>
https://product-display-556dc-default-rtdb.firebaseio.com/.json      </div>
    </div>
  );
}

export default App;
