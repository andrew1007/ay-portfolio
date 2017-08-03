import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Intro from './components/intro/intro'
import Project from './components/project/project'
import InterestMe from './components/project_description/interest_me'
import Skills from './components/skills/skills'

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
        <Skills/>
        <Project image={"interest_me.jpg"} description={<InterestMe/>}/>
      </div>
    );
  }
}

export default App;
