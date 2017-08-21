import React from 'react'

const Link = props => {
  return (
    <div className="intro-links-container">
      <a target="_blank" href={props.link} className="intro-links-icon-container">
        <i className={props.icon} aria-hidden="true"></i>
      </a>
      <a target="_blank" href={props.link}>
        <span className="intro-links-url">{props.name}</span>
      </a>
    </div>
  )
}

export default Link
