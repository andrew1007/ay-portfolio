import React from 'react'
import ProjectImage from './project_image'
import ProjectText from './project_text'

const Project = (props) => {
  const websiteUrl = <button onClick={() => window.open(props.url)}>
              <a target="_blank" href={props.url}>
                Visit Website
              </a>
            </button>
  const noImageStyle = {
    maxHeight: '10px',
    minHeight: '10px'
  }
  return (
    <div className="project-container">
      <div style={props.image ? {} : noImageStyle}  className="project-subcontainer-image">
        <a target="_blank" href={props.url}>
          { props.image ? <ProjectImage image={props.image}/> : null }
        </a>
      </div>
      <div className="project-subcontainer-text">
        { props.description ? <ProjectText description={props.description}/> : null }
      </div>
      <div>
        { props.image && props.show ? websiteUrl : null }
      </div>
    </div>
  )
}

export default Project
