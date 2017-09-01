import React from 'react'
import NavBarLink from '../nav_bar_link/nav_bar_link'
import Scroll from 'react-scroll'

const links = new Map ()
//keys are nav bar names
//keys are html id names of containers to jump to using react-scroll
links.set("About Me", "intro-container")
links.set("Skills", "skills-container")
links.set("Projects", "projects-container")

const NavBar = () => {
  const Link = Scroll.Link
  const navLinks = Array.from(links).map(([title, tagId]) => {
    return (
      <Link to={tagId} key={title} smooth={true} duration={500} offset={0}>
        <span key={title} className="navbar-transparent-link-true">
          <NavBarLink title={title} tagId={tagId}/>
        </span>
      </Link>
    )
  })

  const resume =
    <a target="_blank" href={require('../../images/resume.pdf')}>
      <span className="navbar-transparent-link-true">
        Resume
      </span>
    </a>

  const blog =
    <a target="_blank" href={'http://www.andrewyueh.blogspot.com/'}>
      <span className="navbar-transparent-link-true">
        Blog
      </span>
    </a>

  return (
    <nav id="navbar-container" className="navbar-hidden-true">
      <span className="navbar-link-container">
        {blog}
        {resume}
        {navLinks}
      </span>
    </nav>
  )

}

export default NavBar
