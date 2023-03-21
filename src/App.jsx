import './App.css'
import Nav from './components/Nav/Nav'
import SocialNav from './components/Nav/SocialNav'
import EmailNav from './components/Nav/EmailNav'
import Hero from './components/Hero/Hero'
import About from './components/About/About'

function App() {

  return (
    <div className="App">
      <SocialNav />
      <EmailNav />
      <Nav />
      <Hero />
      <About />
    </div>
  )
}

export default App
