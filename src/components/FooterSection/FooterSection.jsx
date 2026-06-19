import React from 'react'
import './footerSection.css'

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const FooterSection = () => {

  let footerLinks = [
    { name: "Home", link: "#" },
    { name: "About Me", link: "#" },
    { name: "Projects", link: "#" },
    { name: "Certificates", link: "#" },
    { name: "Contact Me", link: "#" },
  ]

  return (
    <footer className='footer'>
      <div className='footer-content'>

        <div className='footer-brand'>
          <h2>Muhammad Hamza</h2>
          <p>Frontend ReactJS Developer based in Karachi, Pakistan. Building clean, responsive and engaging web experiences.</p>

          <div className='footer-socials'>
            <a href="#" target='_blank' rel='noreferrer' aria-label='GitHub'><FaGithub /></a>
            <a href="#" target='_blank' rel='noreferrer' aria-label='LinkedIn'><FaLinkedin /></a>
            <a href="#" target='_blank' rel='noreferrer' aria-label='Email'><MdEmail /></a>
          </div>
        </div>

        <div className='footer-links'>
          <h3>Quick Links</h3>
          <ul>
            {footerLinks.map((item, index) => (
              <li key={index}><a href={item.link}>{item.name}</a></li>
            ))}
          </ul>
        </div>

      </div>

      <div className='footer-bottom'>
        <p>© {new Date().getFullYear()} Muhammad Hamza. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default FooterSection