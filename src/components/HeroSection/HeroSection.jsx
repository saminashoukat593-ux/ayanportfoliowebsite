import React from 'react'

import { FaGithub } from "react-icons/fa";
import profilepicture from '../../assets/profilepicture.jpg'
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";

import './heroSection.css'



const HeroSection = () => {

  let techIcons = [
      {
        icon: <SiHtml5 />,
        color: "orange",
      },
    {
      icon: <FaCss3Alt />,
      color: "#6cb9ff"
   
    },
    {
      icon: <IoLogoJavascript />,
      color: "#fff617"
    },
    {
     icon: <GrReactjs />,
     color: "#6fa8dc" 
    }
  ]


  return (
    <div className='heroSection'>
      {/* FIRST CONTAINER */}
      <div className='heroSection-firstContainer'>
        <div className='heroSection-firstContainer-leftSection'>
          <h1>Frontend ReactJS Developer</h1>


          <p>Hi, I'm <span>Muhammad Ayan Ali</span>. A passionate Full Stack NextJS | MERN Stack | ReactJS Developer based in Karachi, Pakistan. 📍</p>


          <FaGithub className='icon' />
        </div>

        {/* IMAGE CONTAINER */}
        <div className='heroSection-image'>
          <img src={profilepicture} alt="" />
        </div>
      </div>

      {/* SECOND CONTAINER */}
      <div className='heroSection-second-container'>

        <div className='heroSection-secondcontainer-left'>

          <h3>Tech Stack</h3>

          <span className='custom-line'></span>
        </div>

        <div className='heroSection-secondcontainer-skills-icon'>
          {techIcons.map((items) => (
            <h1 style={{color: items.color}}>{items.icon}</h1>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSection