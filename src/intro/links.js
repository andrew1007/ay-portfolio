import React from 'react'

const Links = props => {

  const githubLink = "https://github.com/andrew1007"
  const linkedInLink = "https://www.linkedin.com/in/andrewyueh/"

  const github = () => (
    <div>
      <a target="_blank" href={githubLink}>
          <span>Github</span>
      </a>
    </div>
  )

  const linkedIn = () => (
    <div>
      <a target="_blank" href={linkedInLink}>
          <span>LinkedIn</span>
      </a>
    </div>
  )

  const email = () => (
    <div>
      <a href="mailto:yueh.andrew@gmail.com">
        <span>yueh.andrew@gmail.com</span>
      </a>
    </div>
  )

  return (
    <div>
      {github()}
      {linkedIn()}
      {email()}
    </div>
  )
}

export default Links
