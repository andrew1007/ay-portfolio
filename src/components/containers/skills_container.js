import React from 'react';
import Skill from '../skill/skill'
import d3 from '../../svgs/d3'
import typeScript from '../../svgs/ts'
const allSkills = new Map()
//values are fontawesome class names
//keys are skill name
//if you want to render svg, import that instead of className
allSkills.set("React.js + Redux", "icon-reactjs")
allSkills.set("JavaScript", "icon-javascript")
allSkills.set("TypeScript", typeScript)
allSkills.set("d3", d3)
allSkills.set("Ruby on Rails", "icon-ruby-on-rails")
allSkills.set("Sass", "icon-sass")
allSkills.set("Ruby", "icon-ruby")
allSkills.set("PostgreSQL", "icon-postgres")

const SkillsContainer = _ => {
  const skillsArray = Array.from(allSkills).map(([name, icon]) => {
    let skillProps = {key: name, icon, name}
    return <Skill {...skillProps}/>
  })

  return (
    <div className="skills-container">
      <h1>Here is what I know</h1>
      <div className="skills-entries-container">
        {skillsArray}
      </div>
    </div>
  )
}

export default SkillsContainer
