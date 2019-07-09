import React from 'react';
import Skill from '../skill/skill'
import d3 from '../../svgs/d3'
import typeScript from '../../svgs/ts'
import ReduxSaga from '../../svgs/saga'
import Immutable from '../../svgs/immutable'
const allSkills = new Map()
//values are fontawesome class names
//keys are skill name
//if you want to render svg, import that instead of className
allSkills.set("React.js + Redux", "icon-reactjs")
allSkills.set("ES6 + ES7", "icon-javascript")
allSkills.set("TypeScript", typeScript)
allSkills.set("Ruby on Rails", "icon-ruby-on-rails")
allSkills.set("Ruby", "icon-ruby")
allSkills.set("PostgreSQL", "icon-postgres")
allSkills.set("Immutable.js", Immutable)
allSkills.set("Sass", "icon-sass")
allSkills.set("d3", d3)
allSkills.set("Redux Saga", ReduxSaga)

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
