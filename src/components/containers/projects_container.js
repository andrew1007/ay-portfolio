import React from 'react'
import Project from '../project/project'
//project imports
import InterestMe from '../project_description/interest_me'
import FireworksJS from '../project_description/fireworks_js'
import SearchAndSort from '../project_description/search_and_sort'
import HayaSushi from '../project_description/haya_sushi'
import FillerDescription from '../project_description/filler_description'
import Portfolio from '../project_description/portfolio'
import OnImagesLoaded from '../project_description/on_images_loaded'
import ReactMemory from '../project_description/react_memory'

const allProjects = new Map()
//directory of image file is abstracted out. see src/project/project_image.js
//keys are texts components
//values are images
allProjects.set(<OnImagesLoaded/>, ["npm_logo.jpg", "https://www.npmjs.com/package/react-on-images-loaded"])
allProjects.set(<InterestMe/>, ["interest_me.jpg", "https://interest-me.herokuapp.com/#/session"])
allProjects.set(<FireworksJS/>, ["fireworks_js.gif", "https://andrew1007.github.io/fireworksJS/"])
allProjects.set(<SearchAndSort/>, ["search_and_sort.jpg", "http://joycechau.me/SearchAndSort/#/bsearch"])
allProjects.set(<Portfolio/>, [null, null])
allProjects.set(<HayaSushi/>, ["haya-sushi.jpg", "https://haya-sushi.herokuapp.com/"])
allProjects.set(<ReactMemory/>, [null, null])

const ProjectsContainer = _ => {
  let projectArray = Array.from(allProjects).map(([description, [image, url]]) => {
    let projectProps = {image, description, url}
    projectProps['show'] = (image === "portfolio.jpg") ? false : true
    return <Project key={image} {...projectProps} />
  })
  if (projectArray.length % 2 !== 0) {
    let fillProps = {key: 'fill', image: null, url: null, description: <FillerDescription/>}
    const filler = <Project {...fillProps} />
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
