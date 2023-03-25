import React from 'react'
import './Nav.scss'
import logo from '../../assets/logo.svg'

const Nav = ({ resumeDownload }) => {
  const navItems = [
    { name: 'About', link: 'about' },
    { name: 'Experience', link: 'experience' },
    { name: 'Work', link: 'work' },
    { name: 'Contact', link: 'contact' },
  ]

  const handleScroll = (id) => {
      const element = document.getElementById(id)
      window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
      })
  }

  return (
    <div className="nav-wrapper">
        <div
            className="logo"
            id="logo"
            onClick={() => handleScroll("logo")}
        >
          <img src={logo} alt="logo" />
        </div>
      <div className="nav-items">
        {navItems
          .map(
            item => (
                <div
                    className="nav-item"
                    key={item.name}
                    onClick={() => handleScroll(item.link)}
                >
                  {item.name}
                </div>
            )
          )}
        <button onClick={() => resumeDownload()}>Resume</button>
      </div>
    </div>
  )
}

export default Nav