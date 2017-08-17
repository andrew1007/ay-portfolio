import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import http from "http";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './newrelic.js'
import Favicon from 'react-favicon'

document.addEventListener('DOMContentLoaded', () => {
  setInterval(function() {
    http.get("https://ay-portfolio.herokuapp.com/");
  }, 300000);

  <Favicon url={[null]}/>

  ReactDOM.render(<App/>, document.getElementById('root'));
  registerServiceWorker();
})
