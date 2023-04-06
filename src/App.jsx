import { createContext } from "react";
import './App.css'
import styled from 'styled-components'
import Nav from './components/Nav/Nav'
import SocialNav from './components/Nav/SocialNav'
import EmailNav from './components/Nav/EmailNav'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollButton from "./components/Nav/ScrollButton"
import resume from './assets/document/Info-for-intending-couples.pdf'
import { email, socialIcons } from "./utils/data.js"

const NavContainer = styled.div`
  position: relative;
`
const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 8vw 8vw 0 8vw;
  display: block;
  position: relative;
`

export const DataContext = createContext({})

function App() {

    const handleResumeDownload = () => {
        setTimeout(() => {
            window.open(resume, '_blank')
        }, 500)

    }


  return (
      <DataContext.Provider value={{email, socialIcons}}>
        <div className="App">
            <NavContainer>
              <Nav resumeDownload={handleResumeDownload}/>
            </NavContainer>
          <ScrollButton />
          <SocialNav />
          <EmailNav />
            <ContentWrapper>
                {/*<input type="file" value={resume} />*/}
                {/*<div className={'content-wrapper'}>*/}
                <Hero resumeDownload={handleResumeDownload}/>
                <About />
                <Experience />
                <Work />
                <Contact />
                <Footer />
              {/*</div>*/}
            </ContentWrapper>
        </div>
      </DataContext.Provider>
  )
}

export default App
