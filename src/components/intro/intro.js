import React, {Component} from 'react'
import IntroText from './intro_text'
import Links from './links'
import ProfilePicture from './profile_picture'

export default class Intro extends Component {
  render() {
    return (
      <div className="intro-container">
        <div className="intro-subcontainer">
          <IntroText/>
          <Links/>
        </div>
        <div className="intro-subcontainer">
          <ProfilePicture/>
        </div>
      </div>
    )
  }
}
