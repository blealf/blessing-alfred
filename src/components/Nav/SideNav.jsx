import React from 'react'
import github from '../../assets/nav/github.svg'
import twitter from '../../assets/nav/twitter.svg'
import linkedin from '../../assets/nav/linkedin.svg'
import instagram from '../../assets/nav/instagram.svg'

const SideNav = () => {
  const sideNavItems = [
    { name: 'github', path: github },
    { name: 'twitter', path: twitter },
    { name: 'linkedin', path: linkedin },
    { name: 'instagram', path: instagram }
  ]
  return (
    <div className="side-nav">
      <div className="side-nav__left">
        <div className="nav-social">
          {sideNavItems.map(item => {
            return (
              <a href="https://google.com" target="_blank">
                <img src={item.path} alt={item.name} />
              </a>
            )
          })}
          <div className="vertical-divider"></div>
        </div>
      </div>
      <div className="side-nav__right">
        <p><a href="mailto:blealf@gmail.com">blealf@gmail.com</a></p>
        <div className="vertical-divider"></div>
      </div>
    </div>
  )
}

export default SideNav