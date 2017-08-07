import React from 'react'
import Project from '../project/project'
//project imports
import InterestMe from '../project_description/interest_me'
import FireworksJS from '../project_description/fireworks_js'

const allProjects = new Map
//directory of image file is abstracted out. see /src/project/project_image.js
allProjects.set(<InterestMe/>, "interest_me.jpg")
allProjects.set(<FireworksJS/>, "fireworks_js.gif")

const ProjectsContainer = () => {
  let projectArray = []
  let description
  for (let [component, image] of allProjects) {
    description = <Project key={image} image={image} description={component}/>
    projectArray = [...projectArray, description]
  }
  return (
    <div className='containers-projects-container'>
      {projectArray}
    </div>
  )
}

export default ProjectsContainer
