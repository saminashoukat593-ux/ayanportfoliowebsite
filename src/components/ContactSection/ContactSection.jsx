import React, { useState } from 'react'
import './contactSection.css'

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail, MdLocationOn } from "react-icons/md"
import { IoCall } from "react-icons/io5"

const ContactSection = () => {

  let [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  let contactInfo = [
    {
      icon: <MdEmail />,
      label: "Email",
      value: "muhammadhamza@example.com"
    },
    {
      icon: <IoCall />,
      label: "Phone",
      value: "+92 300 0000000"
    },
    {
      icon: <MdLocationOn />,
      label: "Location",
      value: "Karachi, Pakistan"
    },
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you ${formData.name || "there"}! Your message has been received.`)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className='contact-container' id='contact'>
      <h1>Contact Me</h1>

      <h2>Let's build something great together 🤝</h2>

      <div className='contact-content'>

        {/* LEFT - INFO */}
        <div className='contact-info'>
          <p className='contact-info-text'>
            Have a project in mind or just want to say hi? Feel free to reach out
            through the form or any of the channels below.
          </p>

          <div className='contact-info-list'>
            {contactInfo.map((item, index) => (
              <div className='contact-info-item' key={index}>
                <span className='contact-info-icon'>{item.icon}</span>
                <div>
                  <h4>{item.label}</h4>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='contact-socials'>
            <a href="#" target='_blank' rel='noreferrer' aria-label='GitHub'><FaGithub /></a>
            <a href="#" target='_blank' rel='noreferrer' aria-label='LinkedIn'><FaLinkedin /></a>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='contact-form-field'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Your name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className='contact-form-field'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='you@example.com'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className='contact-form-field'>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              name='message'
              rows='5'
              placeholder='Tell me about your project...'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactSection