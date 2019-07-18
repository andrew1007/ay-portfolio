import React from 'react'

const style = { textDecoration: 'underline' }
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
        My concentration is in front end development with technologies that I love: React and Redux.
      </p>
      <p>
        My occupation is also my hobby. I spend my free time coding up personal projects.
        I also frequent Stack Overflow and helping fellow programmers with their JavaScript and
        React code. Check out my profile {" "}
        <a href="https://stackoverflow.com/users/4385889/andrew?tab=profile" target="_blank" rel="noopener noreferrer" style={style}>
          here
        </a>
        . If you like my answers,
        feel free to upvote them. I love internet points.
      </p>
    </div>
  </div>
)

export default AboutMe
