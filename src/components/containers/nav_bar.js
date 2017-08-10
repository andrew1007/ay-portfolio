import React from 'react'
import NavBarLink from '../nav_bar_link/nav_bar_link'

const links = new Map ()
links.set("About Me", "intro-container")
links.set("Skills", "skills-container")
links.set("Projects", "projects-container")

const NavBar = () => {

  const navLinks = Array.from(links).map(([title, tagId]) => {
    return <NavBarLink title={title} tagId={tagId}/>
  })

  return (
    <nav>
      {navLinks}
    </nav>
  )

}

export default NavBar
