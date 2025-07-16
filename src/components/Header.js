import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

function Header() {
  return (
    <header className='header'>
        <h1 className='logo'>MyPortfolio</h1>
        <nav className='nav'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="services">Services</Link>
            <Link to="/contact">Contact</Link>
        </nav>

    </header>
  )
}

export default Header