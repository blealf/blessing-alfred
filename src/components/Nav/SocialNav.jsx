import React from 'react'
import github from '../../assets/nav/github.svg'
import twitter from '../../assets/nav/twitter.svg'
import linkedin from '../../assets/nav/linkedin.svg'
import instagram from '../../assets/nav/instagram.svg'
import './Nav.scss'

const SocialNav = () => {
  const SocialNavItems = [
    { name: 'github', path: github },
    { name: 'twitter', path: twitter },
    { name: 'linkedin', path: linkedin },
    { name: 'instagram', path: instagram }
  ]
  return (
    <div className="social-nav">
      <div className="nav-social">
        {SocialNavItems.map(item => {
          return (
            <a href="https://google.com" target="_blank" key={item.name}>
              <img src={item.path} alt={item.name} />
            </a>
          )
        })}
        <div className="vertical-divider"></div>
      </div>
    </div>
  )
}

export default SocialNav