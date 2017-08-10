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

const App = () => {
  const _showId = (id) => {
    $(`#${id}`).removeClass("hidden-true").addClass("hidden-false")
  }

  const _hideId = (id) => {
    $(`#${id}`).removeClass("hidden-false").addClass("hidden-true")
  }

  const renderContainers = Array.from(containers).map((section, idx) => {
    return (
      <Waypoint
        onEnter={() => _showId(section[1])}
        onLeave={() => _hideId(section[1])}
        key={idx}
        >
        <div id={section[1]} className="hidden-true">
          {section[0]}
        </div>
      </Waypoint>
    )
  })

  return (
    <div className="App">
      <NavBar/>
      {renderContainers}
    </div>
  );
}

export default App
