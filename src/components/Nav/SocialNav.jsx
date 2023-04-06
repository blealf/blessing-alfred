import React, {useContext} from 'react'
import './Nav.scss'
import {DataContext} from "../../App.jsx";

const SocialNav = () => {
  const data = useContext(DataContext)
  return (
    <div className="social-nav">
      <div className="nav-social">
        {data.socialIcons.map(item => {
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