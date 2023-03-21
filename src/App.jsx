import './App.css'
import Nav from './components/Nav/Nav'
import SocialNav from './components/Nav/SocialNav'
import EmailNav from './components/Nav/EmailNav'
import Hero from './components/Hero/Hero'

function App() {

  return (
    <div className="App">
      <SocialNav />
      <EmailNav />
      <Nav />
      <Hero />
    </div>
  )
}

export default App
