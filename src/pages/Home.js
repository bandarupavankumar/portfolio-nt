import React from 'react'
import './Home.css';
import heroImg from '../assets/hero.jpg';
const Home = () => {
  return (
    <div className='home'>
      <section className='hero'>
        <img src={heroImg} alt="Raju - Web Developer" className='hero-image' />
        <h1>Hi , I'm Pavan - web Developer</h1>
        <p>I build modern and responsive websites using React.</p>
        <a href="" className='btn'>View Demo</a>
      </section>
    </div>
  ) 
}

export default Home