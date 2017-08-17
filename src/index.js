import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Favicon from 'react-favicon'
require('./newrelic')

document.addEventListener('DOMContentLoaded', () => {
  <Favicon url={[null]}/>
  ReactDOM.render(<App/>, document.getElementById('root'));
  registerServiceWorker();
})
