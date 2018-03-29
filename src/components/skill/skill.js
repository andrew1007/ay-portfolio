import React from 'react'

const Skill = props => {
  const style = {"fontSize": "5em"}
  let thing = typeof props.icon
  let render
  if (thing === 'string') {
    render = <i className={props.icon} style={style}></i>
  } else {
    render = props.icon
  }
  return (
    <div className="skill-container">
      <div className="skill-icon-container">
        {render}
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
