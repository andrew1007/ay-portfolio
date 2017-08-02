import React from 'react'
import ProjectImage from './project_image'
import ProjectText from './project_text'

const Project = (props) => {
  return (
    <div className="project-container">
      <div className="project-subcontainer">
        <ProjectImage
          image={props.image}
          />
      </div>
      <div className="project-subcontainer">
        <ProjectText description={props.description}/>
      </div>
    </div>
  )
}

export default Project
