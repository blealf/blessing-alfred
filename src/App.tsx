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

const NavContainer = styled.div`
  position: relative;
`;
const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 8vw 8vw 0 8vw;
  display: block;
  position: relative;
`;

function App() {
  const handleResumeDownload = () => {
    setTimeout(() => {
      window.open(resume, '_blank');
    }, 500);
  };

  return (
    <DataContextProvider>
      <div className="App">
        <div className="mask"></div>
        <ToastContainer theme="dark" />
        <NavContainer>
          <Nav resumeDownload={handleResumeDownload} />
        </NavContainer>
        <ScrollButton />
        <SocialNav />
        <EmailNav />
        <ContentWrapper>
          {/*<input type="file" value={resume} />*/}
          {/*<div className={'content-wrapper'}>*/}
          <Hero resumeDownload={handleResumeDownload} />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
          {/*</div>*/}
        </ContentWrapper>
      </div>
    </DataContextProvider>
  );
}

export default App;
