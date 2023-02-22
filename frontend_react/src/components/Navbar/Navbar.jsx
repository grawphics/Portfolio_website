import React from 'react'
import './Navbar.scss'
import { images } from '../../constants'

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navabar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['Home', 'About', 'Contact', 'Work', 'Skills'].map((item) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <div />
            <a href={`#{item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar