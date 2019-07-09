import React from 'react'
import ProjectImage from './project_image'
import ProjectText from './project_text'

const noImageStyle = {
  maxHeight: 0,
  minHeight: 0,
  margin: 0,
  padding: 0
}

const Project = (props) => {
  return (
    <div className="project-container">
      <div style={props.image ? {} : noImageStyle} className="project-subcontainer-image">
        <a target="_blank" href={props.url}>
          {props.image ? <ProjectImage image={props.image} /> : null}
        </a>
      </div>
      <div style={props.image ? {} : noImageStyle} className="project-subcontainer-text">
        {props.description ? <ProjectText description={props.description} url={props.url} /> : null}
      </div>
    </div>
  )
}

export default Project
