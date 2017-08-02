import React from 'react'

const ProjectImage = (props) => {
  const isUrl = props.image.includes("https://")
  return (
    <div className="project-image-container">
      <img
        className="project-image-picture"
        src={isUrl ? props.image : require(`../../images/${props.image}`)}
        alt=""
        />
    </div>
  )
}

export default ProjectImage
