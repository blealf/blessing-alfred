import { useRef } from 'react'
import logo from '../../assets/logo_new.svg'
import menu from '../../assets/menu.svg'
import './Nav.scss'

const Nav = ({ resumeDownload }: { resumeDownload: () => void }) => {
  const navItems = [
    { name: 'About', link: 'about' },
    { name: 'Experience', link: 'experience' },
    { name: 'Projects', link: 'projects' },
    { name: 'Contact', link: 'contact' },
  ]

    const mobileNav = useRef<HTMLDivElement | null>(null)

  const handleScroll = (id: string) => {
      const element = document.getElementById(id)
      if (!element) return
      window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
      })
  }

  const handleMenuOpen = () => {
    if (!mobileNav.current) return
    mobileNav.current.style.right = '0px';
  }
  
  const handleMenuClose = () => {
    if (!mobileNav.current) return
    mobileNav.current.style.right = -300 + 'px';
  }

  return (
    <div className="nav-wrapper">
      <div
        className="logo"
        id="logo"
        onClick={() => handleScroll("logo")}
      >
        <img src={logo} alt="logo" width="30" />
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