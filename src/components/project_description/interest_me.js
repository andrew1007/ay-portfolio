import React from 'react'

const InterestMe = () => (
  <div>
    <h2>
      Interest Me
    </h2>
      <p className="project-description-text">
        InterestMe is a social media web app for users to share pictures
        with each other.
        It is my full stack web app that I created in two weeks.
        I polish and maintain it while I work on other projects. All of
        my core web development principles, layered into one web app.
        Its stack is:
      </p>
      <div className="project-description-interest-me-ul-container">
        <ul className="project-description-interest-me-ul">
          <li>Rails Backend</li>
          <li>React.js/Redux Frontend</li>
          <li>PostgreSQL database</li>
          <li>SASS/CSS styling</li>
        </ul>
      </div>
  </div>
)

export default InterestMe
