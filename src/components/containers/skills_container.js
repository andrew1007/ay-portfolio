import React from 'react';
import Skill from '../skill/skill'

const allSkills = new Map ()
//values are fontawesome class names
//keys are skill name
allSkills.set("React.js + Redux", "icon-reactjs")
allSkills.set("JavaScript", "icon-javascript")
allSkills.set("Ruby on Rails",  "icon-ruby-on-rails")
allSkills.set("Sass",  "icon-sass")
allSkills.set("Ruby", "icon-ruby")
allSkills.set("PostgreSQL",  "icon-postgres")

const SkillsContainer = () => {
  const style = {"fontSize": "5em"}
  let fontAwesomeIcon
  const skillsArray = Array.from(allSkills).map(([name, skill]) => {
    fontAwesomeIcon = <i className={skill} style={style}></i>
    return <Skill key={name} icon={fontAwesomeIcon} name={name}/>
  })

  return (
    <div className="skills-container">
      <h1>Here are some things I know</h1>
      <div className="skills-entries-container">
        {skillsArray}
      </div>
    </div>
  )
}

export default SkillsContainer
