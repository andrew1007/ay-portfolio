import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import IntroContainer from './components/containers/intro_container'
import SkillsContainer from './components/containers/skills_container'
import ProjectsContainer from './components/containers/projects_container'

class App extends Component {
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
