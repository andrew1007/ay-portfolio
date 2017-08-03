import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Intro from './components/intro/intro'
import Project from './components/project/project'
import InterestMe from './components/project_description/interest_me'

class App extends Component {
  // <Intro/>
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <i className="icon-ruby-on-rails"></i>
        <Project image={"interest_me.jpg"} description={<InterestMe/>}/>
      </div>
    );
  }
}

export default App;
