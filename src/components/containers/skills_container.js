import React from 'react';
import Skill from '../skill/skill'

const style = {"fontSize": "5em"}
const allSkills = new Map ()
allSkills.set("React.js", <i className="icon-reactjs" style={style}></i>)
allSkills.set("JavaScript", <i className="icon-javascript" style={style}></i>)
allSkills.set("Ruby on Rails",  <i className="icon-ruby-on-rails" style={style}></i>)
allSkills.set("Sass",  <i className="icon-sass" style={style}></i>)
allSkills.set("Ruby", <i className="icon-ruby" style={style}></i>)
allSkills.set("PostgreSQL",  <i className="icon-postgres" style={style}></i>)

const SkillsContainer = () => {
    let skillArray = []
    let component
    for (let [skill, icon] of allSkills) {
      component = <Skill key={skill} icon={icon} name={skill}/>
      skillArray = [...skillArray, component]
    }

  return (
    <div className="skills-container">
      <h1>Here are some things I know</h1>
      <div className="skills-entries-container">
        {skillArray}
      </div>
    </div>
  )
}

export default SkillsContainer
