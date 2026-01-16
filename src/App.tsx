import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import EmailNav from './components/Nav/EmailNav';
import Nav from './components/Nav/Nav';
import ScrollButton from './components/Nav/ScrollButton';
import SocialNav from './components/Nav/SocialNav';
import Projects from './components/Projects/Projects';
import DataContextProvider from './contexts/DataContext';
// import resume from './assets/document/Blessing_Alfred_CV_pp.pdf';
import resume from './assets/document/Blessing_Alfred_Resume.pdf';
import { useState, useRef, useEffect } from 'react';
import Video1 from './assets/video/video1.mp4';
import Video2 from './assets/video/video2.mp4';
import Video3 from './assets/video/video3.mp4';
import Video4 from './assets/video/video4.mp4';
import Video5 from './assets/video/video5.mp4';

function App() {
  const [activeId, setActiveId] = useState<string>('hero');

  const sections = [
    { id: "hero", path: Video2 },
    { id: "about", path: Video1 },
    { id: "experience", path: Video4 },
    { id: "projects", path: Video5 },
    { id: "contact", path: Video3 },
  ];

  useEffect(() => {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + window.innerHeight / 2;

          for (const section of sections) {
            const element = document.getElementById(section.id);
            if (element) {
              const elementTop = element.offsetTop;
              const elementHeight = element.offsetHeight;

              if (scrollPosition >= elementTop && scrollPosition < elementTop + elementHeight) {
                if (activeId !== section.id) {
                  setActiveId(section.id);
                }
                break;
              }
            }
          }

          ticking = false;
        });

        ticking = true;
      }
    });
  }, [sections, activeId]);
  
  const handleResumeDownload = () => {
    setTimeout(() => {
      window.open(resume, '_blank');
    }, 500);
  };

  return (
    <DataContextProvider>
      <main className="App">
        <div className="mask"></div>
        <video 
          key={activeId}
          autoPlay 
          loop 
          muted 
          id="background-video" 
          className="w-full h-full object-cover fixed top-0 left-0 z-[-1]"
        >
          <source src={sections.find(item => item.id === activeId)!.path} type="video/mp4" />
          ...
        </video>
        <ToastContainer theme="dark" />
        <div className="relative">
          <Nav resumeDownload={handleResumeDownload} />
        </div>
        <ScrollButton />
        <SocialNav />
        <EmailNav />
        <div className="content-wrapper">
          <Hero resumeDownload={handleResumeDownload} />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </DataContextProvider>
  );
}

export default App;
