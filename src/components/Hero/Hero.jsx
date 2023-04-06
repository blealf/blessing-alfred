import React from 'react'
import './Hero.scss'
import mac from '../../assets/hero/mac.svg'
import {hero} from '../../utils/data.js'

const Hero = ({ resumeDownload }) => {
    const { greeting, fullname, title, summary} = hero
  return (
    <div className="hero">
      <div className="hero__mac">
        <div className="hero__mac__blur"></div>
        <img src={mac} alt="mac" />
      </div>
      <div className="hero__intro">{greeting}</div>
      <div className="hero__name">{fullname}</div>
      <div className="hero__title">{title}</div>
      <div className="hero__summary">{summary}
      </div>
      <button onClick={() => resumeDownload()}>Check my Resume</button>
    </div>
  )
}

export default Hero