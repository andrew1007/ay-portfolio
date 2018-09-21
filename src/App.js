import React from 'react';
import './styles/App.css';
import IntroContainer from './components/containers/intro_container'
import SkillsContainer from './components/containers/skills_container'
import ProjectsContainer from './components/containers/projects_container'
import NavBar from './components/containers/nav_bar'
import Waypoint from 'react-waypoint'
import $ from 'jquery'

const containers = new Map()
containers.set(<IntroContainer/>, "intro-container")
containers.set(<SkillsContainer/>, "skills-container")
containers.set(<ProjectsContainer/>, "projects-container")

class App extends React.Component {
  _showId(id) {
    $(`#${id}`).removeClass("hidden-true").addClass("hidden-false")
    if (window.pageYOffset > 0) {
      $(".navbar-hidden-true").removeClass("navbar-hidden-true")
      .addClass("navbar-hidden-false")
    }
  }

  _hideId(id) {
    $(`#${id}`).removeClass("hidden-false").addClass("hidden-true")
      $(".navbar-hidden-true").removeClass("navbar-hidden-true")
      .addClass("navbar-hidden-false")
  }

  _showNavBackground() {
    $(`#navbar-container`).removeClass("navbar-hidden-true")
    .addClass("navbar-hidden-false")
    $(".navbar-trasparent-link-true").removeClass("navbar-trasparent-link-true")
    .addClass("navbar-trasparent-link-false")
  }

  _hideNavBackground() {
    $(`#navbar-container`).removeClass("navbar-hidden-false")
    .addClass("navbar-hidden-true")
    $(".navbar-trasparent-link-false").removeClass("navbar-trasparent-link-false")
    .addClass("navbar-trasparent-link-true")
  }

  get containers() {
    return Array.from(containers).map(([component, id], idx) =>
      <Waypoint
        onEnter={() => this._showId(id)}
        onLeave={() => this._hideId(id)}
        key={idx}
        >
        <div id={id} className="hidden-true">
          {component}
        </div>
      </Waypoint>
    )
  }
  
  render() {
    return (
      <div className="App">
        <Waypoint
          onLeave={() => this._showNavBackground()}
          onEnter={() => this._hideNavBackground()}
          >
          </Waypoint>
        <div id="nav-container">
          <NavBar/>
        </div>
        {this.containers}
      </div>
    );
  }
}

export default App
