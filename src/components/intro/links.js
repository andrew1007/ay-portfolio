import React from 'react'

const Links = (props) => {

  const githubLink = "https://github.com/andrew1007"
  const linkedInLink = "https://www.linkedin.com/in/andrewyueh/"

  const github = () => (
    <div className="intro-links-container">
      <a target="_blank" href={githubLink} className="intro-links-icon-container">
        <i className="fa fa-github fa-3x" aria-hidden="true"></i>
      </a>
      <a target="_blank" href={githubLink}>
          <span className="intro-links-url">Github</span>
      </a>
    </div>
  )

  const linkedIn = () => (
    <div className="intro-links-container">
      <a target="_blank" href={linkedInLink} className="intro-links-icon-container">
        <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
      </a>
      <a target="_blank" href={linkedInLink}>
          <span className="intro-links-url">LinkedIn</span>
      </a>
    </div>
  )

  const email = () => (
    <div className="intro-links-container">
      <a href="mailto:yueh.andrew@gmail.com" className="intro-links-icon-container">
        <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
      </a>
      <a href="mailto:yueh.andrew@gmail.com">
        <span className="intro-links-url">yueh.andrew@gmail.com</span>
      </a>
    </div>
  )

  const resume = () => (
    <div className="intro-links-container">
      <a href={require('../../images/resume.pdf')} className="intro-links-icon-container">
        <i className="fa fa-file-pdf-o fa-2x resume" aria-hidden="true"></i>
      </a>
      <a target="_blank" href={require('../../images/resume.pdf')}>
        <span className="intro-links-url">Resume</span>
      </a>
    </div>
  )

  return (
    <div>
      {github()}
      {linkedIn()}
      {resume()}
      {email()}
    </div>
  )
}

export default Links
