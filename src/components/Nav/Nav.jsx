import React from 'react'
import './Nav.scss'
import logo from '../../assets/logo.svg'

const Nav = () => {
  const navItems = [
    { name: 'About', link: '#about' },
    { name: 'Experience', link: '#experience' },
    { name: 'Work', link: '#work' },
    { name: 'Contact', link: '#contact' },
  ]

  return (
    <div className="nav-wrapper">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      <div className="nav-items">
        {navItems
          .map(
            item => <div className="nav-item">
              <a href={item.link}>{item.name}</a>
            </div>
          )}
        <button>Resume</button>
      </div>
    </div>
  )
}

export default Nav