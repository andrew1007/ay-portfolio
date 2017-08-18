import React from 'react'
import Project from '../project/project'
//project imports
import InterestMe from '../project_description/interest_me'
import FireworksJS from '../project_description/fireworks_js'
import SearchAndSort from '../project_description/search_and_sort'
import HayaSushi from '../project_description/haya_sushi'
import FillerDescription from '../project_description/filler_description'
import Portfolio from '../project_description/portfolio'

const allProjects = new Map ()
//directory of image file is abstracted out. see src/project/project_image.js
//keys are texts components
//values are images
allProjects.set(<InterestMe/>, ["interest_me.jpg", "https://interest-me.herokuapp.com/#/session"])
allProjects.set(<FireworksJS/>, ["fireworks_js.gif", "https://andrew1007.github.io/fireworksJS/"])
allProjects.set(<SearchAndSort/>, ["search_and_sort.jpg", "http://joycechau.me/SearchAndSort/#/bsearch"])
allProjects.set(<Portfolio/>, ["portfolio.jpg", null])
allProjects.set(<HayaSushi/>, ["haya_sushi.jpg", "https://haya-sushi.herokuapp.com/#/home"])

const ProjectsContainer = () => {
  let projectArray = Array.from(allProjects).map(([component, image]) => {
    return <Project
      key={image[0]}
      image={image[0]}
      description={component}
      url={image[1]}
      show={image[0] === "portfolio.jpg" ? false : true}
    />
  })
  if (projectArray.length % 2 !== 0) {
    const filler = <Project key={'fill'}
      image={null}
      description={<FillerDescription/>}
      url={null}
    />
    projectArray = [...projectArray, filler]
  }

  return (
    <div className='containers-projects-container'>
        <h1>
          Things I've made
        </h1>
        <div className="containers-individual-projects">
          { projectArray }
        </div>
    </div>
  )
}

export default ProjectsContainer
