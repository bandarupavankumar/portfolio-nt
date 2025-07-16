import React from 'react'
import './About.css';
import profileImg from '../assets/profile.jpg';
function About() {
  return (
    <div className='about'>
      <h2>About Me</h2>
      <img src={profileImg} alt="Raju profile picture" className='about-img'/>
      <p>
        I'm a web developer with a passion for clean UI, accessibility, and responsive design.
        My mission is simple: "Do your best."
      </p>
      <h3>Skills</h3>
      <ul className='skills-list'>
        <li>React.js</li>
        <li>HTML & CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>REST APIs</li>
        <li>Responsive Design</li>
      </ul>
    </div>
  )
}

export default About