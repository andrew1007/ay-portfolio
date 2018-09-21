import React from 'react'

const style = {textDecoration: 'underline'}
const AboutMe = () => (
  <div className="about-me-container">
    <div className="about-me-text">
      <p>
        I'm a software engineer.
        I found my passion in graduate school, where I hold a
        Master's Degree in Chemical Engineering. My research was my
        first exposure to programming and I loved it so much,
        I switched careers.
      </p>
      <p>
        I am a full stack developer at {" "}
        <a href="https://www.groove.co/" target="_blank" rel="noopener noreferrer" style={style}>
          Groove.co
        </a>
        . My job is full stack, but my concentration is in front end development with technologies that I love: React and Redux.
      </p>
      <p>
        My job is also my hobby. I spend my free time programming personal projects. 
        I also frequent Stack Overflow and helping fellow programmers with their JavaScript and
        React code. Check out my profile {" "}
        <a href="https://stackoverflow.com/users/4385889/andrew" target="_blank" rel="noopener noreferrer" style={style}>
          here
        </a>
        . If you like my answers,
        feel free to upvote them. I love internet points.
      </p>
    </div>
  </div>
)

export default AboutMe
