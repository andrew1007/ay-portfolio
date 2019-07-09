import React from 'react'

const Skill = props => {
  const style = {"fontSize": "5em"}
  let renderIcon
  if (typeof props.icon === 'string') {
    renderIcon = <i className={props.icon} style={style}></i>
  } else {
    renderIcon = props.icon
  }
  return (
    <div className="skill-container">
      <div className="skill-icon-container">
        {renderIcon}
      </div>
      <div className="skill-name-container">
        <p className="skill-name">
          {props.name}
        </p>
      </div>
    </div>
  )
}

export default Skill
