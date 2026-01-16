import { useEffect, useLayoutEffect, useRef } from 'react'
import logo from '../../assets/logo_new.svg'
import Logo from '../../assets/logo_new.svg?react'
import menu from '../../assets/menu.svg'
import { Download, Menu, X } from 'lucide-react';
import './Nav.scss'
import gsap from 'gsap';

const Nav = ({ resumeDownload }: { resumeDownload: () => void }) => {
  const navItems = [
    { name: 'About', link: 'about' },
    { name: 'Experience', link: 'experience' },
    { name: 'Projects', link: 'projects' },
    { name: 'Contact', link: 'contact' },
  ]

  const mobileNav = useRef<HTMLDivElement | null>(null)
  const spinnerRef = useRef<HTMLDivElement | null>(null);
  
  useLayoutEffect(() => {
    const el = spinnerRef.current;  
    if(!el) return;

    const spinLogo = gsap.to(el, {
      rotationY: 360,
      scale: 1.1,
      duration: 5,
      repeat: -1,
      ease: "linear",
      paused: true,
      transformPerspective: 1000,
      transformOrigin: "50% 50%"
    });

    const onEnter = () => spinLogo.play();
    const onLeave = () => {
      spinLogo.pause()
      
      gsap.to(el, {
        rotationY: 0,
        duration: 0.6,
        ease: "power2.out"
      });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      spinLogo.kill();
    };

  }, [])

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
        ref={spinnerRef}
        className="logo-wrapper spinner"
        id="logo"
        onClick={() => handleScroll("logo")}
      >
        <Logo className="w-[30px] h-[30px] logo" />
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
        <button className="download-resume" onClick={resumeDownload}>
          <Download size="16" />
          <span>Download Resume</span>
        </button>
        <button className="menu-toggle" onClick={handleMenuOpen}>
          <Menu size="24" />
        </button>
      </div>
      <div
        ref={mobileNav}
        onClick={handleMenuClose}
        className="mobile-nav"
      >
        <button onClick={handleMenuClose}><X /></button>
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
      </div>
    </div>
  )
}

export default Nav