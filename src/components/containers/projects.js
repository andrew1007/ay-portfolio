import React from 'react'
import Project from '../project/project'
//project imports
import InterestMe from '../project_description/interest_me'

const allProjects = new Map
allProjects.set(<InterestMe/>, "interest_me.jpg")

const Projects = () => {
  let projectArray = []
  let description
  for (let [component, image] of allProjects) {
    description = <Project key={image} image={image} description={component}/>
    projectArray = [...projectArray, description]
  }
  return (
    <div>
      {projectArray}
    </div>
  )
}

export default Projects
