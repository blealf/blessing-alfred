import React, {useRef} from 'react'
import './Nav.scss'
import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg'

const Nav = ({ resumeDownload }) => {
  const navItems = [
    { name: 'About', link: 'about' },
    { name: 'Experience', link: 'experience' },
    { name: 'Work', link: 'work' },
    { name: 'Contact', link: 'contact' },
  ]

    const mobileNav = useRef(null)

  const handleScroll = (id) => {
      const element = document.getElementById(id)
      window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
      })
  }

  const handleMenuOpen = () => {
      mobileNav.current.style.right = 0
  }

    const handleMenuClose = () => {
      mobileNav.current.style.right = -300 + 'px';
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
        <button onClick={resumeDownload}>Resume</button>
        <button className="menu-toggle" onClick={handleMenuOpen}>
            <img src={menu} alt="menu" />
        </button>
      </div>
        <div
            ref={mobileNav}
            onClick={handleMenuClose}
            className="mobile-nav"
        >
            <button onClick={handleMenuClose}>X</button>
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