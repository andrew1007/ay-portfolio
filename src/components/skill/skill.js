import React from 'react'

const Skill = props => {
  const style = {"fontSize": "5em"}
  return (
    <div className="skill-container">
      <div className="skill-icon-container">
        <i className={props.icon} style={style}></i>
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
