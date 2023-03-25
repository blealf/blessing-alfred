import React from 'react'
import './Hero.scss'
import mac from '../../assets/hero/mac.svg'

const Hero = ({ resumeDownload }) => {
  return (
    <div className="hero">
      <div className="hero__mac">
        <div className="hero__mac__blur"></div>
        <img src={mac} alt="mac" />
      </div>
      <div className="hero__intro">Hi, my name is</div>
      <div className="hero__name">Blessing Alfred</div>
      <div className="hero__title">I am a frontend developer</div>
      <div className="hero__summary">I'm a frontend developer with a passion 
        for creating engaging and user-friendly digital experiences. I deliver high-quality products 
        that exceed user expectations using the latest web technologies.
        Currently, I’m focused on building accessible, human-centred products 
        at Glover.
      </div>
      <button onClick={() => resumeDownload()}>Check my Resume</button>
    </div>
  )
}

export default Hero