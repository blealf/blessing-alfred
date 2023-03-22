import './App.css'
import Nav from './components/Nav/Nav'
import SocialNav from './components/Nav/SocialNav'
import EmailNav from './components/Nav/EmailNav'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import styled from 'styled-components'
import Contact from './components/Contact/Contact'
import Work from './components/Work/Work'

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;
function App() {

  return (
    <div className="App">
      <SocialNav />
      <EmailNav />
      <Nav />
      <ContentWrapper>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </ContentWrapper>
    </div>
  )
}

export default App
