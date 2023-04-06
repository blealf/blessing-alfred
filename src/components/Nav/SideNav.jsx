import React, {useContext} from 'react'
import {DataContext} from "../../App.jsx";

const SideNav = () => {
    const data = useContext(DataContext)
  return (
    <div className="side-nav">
      <div className="side-nav__left">
        <div className="nav-social">
          {data.socialIcons.map(item => {
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
        <p><a href={`mailto:${data.email}`}>{data.email}</a></p>
        <div className="vertical-divider"></div>
      </div>
    </div>
  )
}

export default SideNav