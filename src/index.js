import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Favicon from 'react-favicon'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <App/>
      <Favicon url={[null]}/>
    </div>
    , document.getElementById('root'));
  registerServiceWorker();
})
