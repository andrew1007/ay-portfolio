import React from 'react'

const style = {textDecoration: 'underline'}
const AboutMe = () => (
  <div className="about-me-container">
    <p className="about-me-text">
      <p>
        I'm a software engineer.
        I found my passion in graduate school, where I hold a
        Master's Degree in Chemical Engineering. My research was my
        first exposure to programming and I liked it so much,
        I switched careers. I love what I do and I hope to
        share my abilities as a Software Engineer.
      </p>
      <p>
        I spend my days programming and tutoring. I also like going on
        Stack Overflow and helping fellow programmers with their JavaScript and
        React code. Check out my profile {" "}
        <a href="https://stackoverflow.com/users/4385889/andrew" target="_blank" style={style}>
         {'here'}
        </a>
        . If you like my answers,
        feel free to upvote them. I love internet points.
      </p>
    </p>
  </div>
)

export default AboutMe
