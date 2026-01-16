import { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import mac from '../../assets/hero/mac.svg'
import { hero } from '../../utils/data.js'
import './Hero.scss'

const Hero = ({ resumeDownload }: { resumeDownload: () => void }) => {
  const { greeting, fullname, title, summary } = hero
  const macHero = useRef(null)
  
  useEffect(() => {
    if (!macHero.current) return
    VanillaTilt.init(macHero.current, {
      max: 30,
      speed: 800,
      scale: 1.2,
      perspective: 500
    });
    () => {
      // @ts-expect-error macHero is not null
      macHero.vanillaTilt.destroy();
    }
  }, [])

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    })
}

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
      <div className="flex gap-4">
        <button onClick={() => resumeDownload()}>Check my Resume</button>
        <button onClick={() => handleScroll('projects')}> See Projects</button>
      </div>
    </div>
  )
}

export default Hero