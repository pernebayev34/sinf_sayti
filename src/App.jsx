import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Coordinators from './components/Coordinators'
import Schedule from './components/Schedule'
import Announcements from './components/Announcements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Coordinators />
        <Schedule />
        <Announcements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
