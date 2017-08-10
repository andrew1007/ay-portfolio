import React, { Component } from 'react'
import Scroll from 'react-scroll'

const NavBarLink = props => {

  const Link = Scroll.Link

  return(
    <Link to={props.tagId} smooth={true} duration={500} offset={-50}>
      {props.title}
    </Link>
  )
}

export default NavBarLink
