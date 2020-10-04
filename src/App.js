import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export default App;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={BasicAuth}>TEST</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}




async function BasicAuth() {
    const authString = 'Basic ' + btoa(process.env.REACT_APP_BASIC_LOGIN + ":" + process.env.REACT_APP_BASIC_PASSWORD)
    console.log(authString)
    const resp = axios.get('https://cors-anywhere.herokuapp.com/https://res-soap.stage.sixt-payment.com//stationlonglist_2.01.json?kdna=' + process.env.REACT_APP_API_LOGIN + '&pwd=' + process.env.REACT_APP_API_PASSWORD + '&language=en_GB', {
      // Axios looks for the `auth` option, and, if it is set, formats a
      // basic auth header for you automatically.
      headers: {
        'Authorization': authString
      }
    });
    console.log((await resp).data); // 200
  }


 

