import React from 'react'

const ProjectImage = (props) => {
  const isUrl = props.image.includes("https://")
  const source = isUrl ? props.image : require(`../../images/${props.image}`)
  return (
    <div className="project-image-container">
      <img
        className="project-image-picture"
        src={source}
        alt=""
        />
    </div>
  )
}

export default ProjectImage
