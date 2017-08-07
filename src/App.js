import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import IntroContainer from './components/intro/intro'
import SkillsContainer from './components/containers/skills'
import ProjectsContainer from './components/containers/projects'

class App extends Component {
  // <Intro/>
  render() {
    return (
      <div className="App">
        <IntroContainer/>
        <SkillsContainer/>
        <ProjectsContainer/>
      </div>
    );
  }
}

export default App;
