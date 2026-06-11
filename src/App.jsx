import React from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import AboutMe from './components/AboutMe/AboutMe'
import ProjectSection from './components/ProjectSection/ProjectSection'
import CertificatesSection from './components/CertificatesSection/CertificatesSection'
import ContactSection from './components/ContactSection/ContactSection'
import FooterSection from './components/FooterSection/FooterSection'

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutMe />
      <ProjectSection />
      <CertificatesSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

export default App