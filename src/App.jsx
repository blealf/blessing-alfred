import './App.css'
import styled from 'styled-components'
import Nav from './components/Nav/Nav'
import SocialNav from './components/Nav/SocialNav'
import EmailNav from './components/Nav/EmailNav'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Work from './components/Work/Work'
import ScrollButton from "./components/Nav/ScrollButton"

const NavContainer = styled.div`
  position: relative;
`
const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 8vw;
  display: block;
  position: relative;
`


function App() {

  return (
    <div className="App">
        <NavContainer>
          <Nav />
        </NavContainer>
      <ScrollButton />
      <SocialNav />
      <EmailNav />
        <ContentWrapper>
          {/*<div className={'content-wrapper'}>*/}
            <Hero />
            <About />
            <Experience />
            <Work />
            <Contact />
          {/*</div>*/}
        </ContentWrapper>
    </div>
  )
}

export default App
