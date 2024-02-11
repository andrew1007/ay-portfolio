import React from 'react'
import Project from '../project/project'
//project imports
import FireworksJS from '../project_description/fireworks_js'
import FillerDescription from '../project_description/filler_description'
import Portfolio from '../project_description/portfolio'
import OnImagesLoaded from '../project_description/on_images_loaded'
import Tansaki from '../project_description/tansaki'
import Book from '../project_description/Book'

const allProjects = new Map()
//directory of image file is abstracted out. see src/project/project_image.js
//keys are texts components
//values are images
allProjects.set(<Book />, ["book.jpg", "https://www.amazon.com/JavaScript-Coding-Teens-Beginners-Developing/dp/1648761119"])
allProjects.set(<Tansaki />, ["tansaki.jpg", "https://tansaki.io"])
allProjects.set(<OnImagesLoaded/>, ["npm_logo.jpg", "https://www.npmjs.com/package/react-on-images-loaded"])
allProjects.set(<FireworksJS/>, ["fireworks_js.gif", "https://andrew1007.github.io/fireworksJS/"])
allProjects.set(<Portfolio/>, ["portfolio.jpg", null])

const ProjectsContainer = _ => {
  let projectArray = Array.from(allProjects).map(([description, [image, url]]) => {
    let projectProps = {image, description, url}
    return <Project key={Math.random()} {...projectProps} />
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
