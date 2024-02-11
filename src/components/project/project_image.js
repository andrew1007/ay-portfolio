import React from 'react'

const ProjectImage = (props) => {
  const isUrl = props.image.includes("https://")
  const source = isUrl ? props.image : require(`../../resources/${props.image}`)
  return (
    <div className="project-image-container" style={props.style}>
      <img
        className="project-image-picture"
        src={source}
        alt=""
        width="501"
        />
    </div>
  )
}

export default ProjectImage
