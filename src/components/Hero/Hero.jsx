import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import './Hero.scss'
import mac from '../../assets/hero/mac.svg'
import {hero} from '../../utils/data.js'

const Hero = ({ resumeDownload }) => {
  const { greeting, fullname, title, summary } = hero
  const macHero = useRef()
  
  useEffect(() => {
    VanillaTilt.init(macHero.current, {
      max: 30,
      speed: 800,
      scale: 1.2,
      perspective: 500
    });
    () => {
      macHero.vanillaTilt.destroy();
    }
  }, [])

  return (
    <div className="hero">
      <div className="hero__mac" ref={macHero}>
        <div className="hero__mac__blur"></div>
        <img src={mac} alt="mac" />
      </div>
      <p className="hero__intro">{greeting}</p>
      <div className="hero__name">{fullname}</div>
      <div className="hero__title">{title}</div>
      <p className="hero__summary">{summary}
      </p>
      <button onClick={() => resumeDownload()}>Check my Resume</button>
    </div>
  )
}

export default Hero