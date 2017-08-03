import React from 'react'

const Skill = (props) => {
  return (
    <div className="skill-container">
      <div className="skill-icon-container">
        {props.icon}
      </div>
      <div className="skill-name-container">
        <p className="skill-name">
          {props.name}
        </p>
      </div>
    </div>
  )
}
