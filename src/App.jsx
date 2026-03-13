import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

// Componentes do index
import Header from './assets/components/header/header.jsx'
import Navigation from './assets/components/nav/nav.jsx'
import Hero from './assets/components/hero-section/hero-section.jsx'
import MainContent from './assets/pages/main-section/main-section.jsx'
import Footer from './assets/components/footer/foooter.jsx'

// Componentes das páginas
import Historia from './assets/pages/historia/hist.jsx'
import Gastronomia from './assets/pages/gastronomia/gastro.jsx'
import Arte from './assets/pages/arte/arte.jsx'
import Vest from './assets/pages/vestimentas/vest.jsx'
import Celebracoes from './assets/pages/celebracoes/celeb.jsx'
import Esportes from './assets/pages/esportes/esportes.jsx'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Hero />
      
      <Routes>
        <Route path ='/' element={<MainContent />} />
        <Route path ='/login' element={<MainContent />} />
        <Route path ='/cad' element={<MainContent />} />
        <Route path ='/hist' element={<Historia />} />
        <Route path ='/gastro' element={<Gastronomia />} />
        <Route path ='/arte' element={<Arte />} />
        <Route path ='/vest' element={<Vest />} />
        <Route path ='/celeb' element={<Celebracoes />} />
        <Route path ='/esportes' element={<Esportes />} />
        <Route path ='/quiz' element={<MainContent />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
