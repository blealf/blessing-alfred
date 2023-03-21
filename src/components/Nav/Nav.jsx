import React from 'react'
import './Nav.scss'
import logo from '../../assets/logo.svg'

const Nav = () => {
  const navItems = [
    { name: 'About', link: '/' },
    { name: 'Experience', link: '/' },
    { name: 'Work', link: '/' },
    { name: 'Contact', link: '/' },
  ]

  return (
    <div className="nav-wrapper">
        <div className="nav-item logo">
          <img src={logo} alt="logo" />
        </div>
      <div className="nav-items">
        {navItems
          .map(
            item => <div className="nav-item">{item.name}</div>
          )}
        <button>Resume</button>
      </div>
    </div>
  )
}

export default Nav