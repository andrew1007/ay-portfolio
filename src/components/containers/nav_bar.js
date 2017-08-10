import React from 'react'
import NavBarLink from '../nav_bar_link/nav_bar_link'

const links = new Map ()
links.set("About Me", "intro-container")
links.set("Skills", "skills-container")
links.set("Projects", "projects-container")

const NavBar = () => {
  let component
  let navLinks = []
  for (let link of links) {
    component = <NavBarLink title={link[0]} tagId={link[1]}/>
    navLinks = [...navLinks, component]
  }
  return (
    <nav>
      {navLinks}
    </nav>
  )

}

export default NavBar
