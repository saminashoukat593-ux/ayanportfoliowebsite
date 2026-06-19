import React, { useState } from 'react'
import logoImage from '../../assets/logo.png'
import { FaBars, FaTimes } from "react-icons/fa"
import './header.css'

const Header = () => {

  let [menuOpen, setMenuOpen] = useState(false)

  let headerMenu = [
    {
      menuItemName: "Home",
      sectionId: "home"
    },
    {
      menuItemName: "About Me",
      sectionId: "aboutme"
    },
    {
      menuItemName: "Projects",
      sectionId: "projects"
    },
    {
      menuItemName: "Certificates",
      sectionId: "certificates"
    },
    {
      menuItemName: "Contact Me",
      sectionId: "contact"
    },
  ]

  const handleScroll = (sectionId) => {
    setMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }



  return (

    <header className='header'>
      <img src={logoImage} alt="logo" />

      <button
        className='header-toggle'
        aria-label='Toggle menu'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`menuItems ${menuOpen ? 'menuItems-open' : ''}`}>
        {headerMenu.map((item, index) => (
          <li key={index} onClick={() => handleScroll(item.sectionId)}>{item.menuItemName}</li>
        ))}
      </ul>

    </header>
  )
}

export default Header