import React from 'react'
import NavBarLink from '../nav_bar_link/nav_bar_link'

const links = new Map ()
//keys are nav bar names
//keys are html id names of containers to jump to
links.set("About Me", "intro-container")
links.set("Skills", "skills-container")
links.set("Projects", "projects-container")

const NavBar = () => {

  const navLinks = Array.from(links).map(([title, tagId]) => {
    return (
      <span className="navbar-link">
        <NavBarLink title={title} tagId={tagId}/>
      </span>
    )

  })

  return (
    <nav className="navbar-container">
      <span className="navbar-link-container">
        <span className="navbar-link">
          <a target="_blank" href={require('../../images/resume.pdf')}>
          Resume
        </a>
      </span>
        {navLinks}
      </span>
    </nav>
  )

}

export default NavBar
