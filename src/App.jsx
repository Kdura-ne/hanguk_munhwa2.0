import { useState } from 'react'
import './App.css'
import Header from './assets/components/header/header.jsx'
import Navigation from './assets/components/nav/nav.jsx'
import Hero from './assets/components/hero-section/hero-section.jsx'
import MainContent from './assets/components/main-section/main-section.jsx'
import Footer from './assets/components/footer/foooter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navigation />
      <Hero />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
