import React from 'react'

const params = [
    'TypeScript + React + Redux',
    'Rails + PostgreSQL + Redis',
    'JSON web token (JWT) user authentication',
    'Google OAuth login'
].map(entry => <li style={{ marginBottom: 5 }}>{entry}</li>)

const Tansaki = () => {
  return (
    <div>
      <h2>
        Tansaki
      </h2>
      <p className="project-description-text">
        An anime discovery website with production-level features!
        <ul>{params}</ul>
      </p>
    </div>
  )
}

export default Tansaki
