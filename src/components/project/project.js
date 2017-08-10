import React from 'react'
import ProjectImage from './project_image'
import ProjectText from './project_text'

const Project = (props) => {
  return (
    <div className="project-container">
      <div className="project-subcontainer-image">
        { props.image ? <ProjectImage image={props.image}/> : null }
      </div>
      <div className="project-subcontainer-text">
        { props.description ? <ProjectText description={props.description}/> : null }
      </div>
    </div>
  )
}

export default Project
