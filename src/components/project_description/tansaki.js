import React from 'react'

const params = [
    'React + Redux',
    'TypeScript',
    'JSS styling',
    'Rails + PostgreSQL',
    'Git workflow + version control',
    'JSON web token (JWT) user authentication',
].map(entry => <li style={{ marginBottom: 5 }}>{entry}</li>)

const headerStyle = {
  minWidth: 310,
  minHeight: 340,
  border: '1px solid white',
  display: 'flex',
  alignItems: 'center'
}

const Tansaki = () => {
  return (
    <div>
      <h2 style={headerStyle}>
        Tansaki (Closed sourced and in development)
      </h2>
      <p className="project-description-text">
        This isn't a demo project. I'm going to
        do a real release, because it offers a service nobody else has 
        made: automatic generation of comprehensive anime recommendations.
        It started off as a basic site, But I decided to add so many 
        fun features that a 1 month project has turned into a 
        +6 month (and beyond) project. What I've utilized and built so far:
        <ul>{params}</ul>
      </p>
    </div>
  )
}

export default Tansaki
