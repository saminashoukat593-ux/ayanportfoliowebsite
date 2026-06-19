import React from 'react'
import './aboutMe.css'

const AboutMe = () => {
  return (
    <div className='aboutme-section' id='aboutme'>
      <div className='aboutme-image-container'>
        <img src="https://muhammadzuhaib.vercel.app/assets/aboutmee-7a57c3bb.svg" alt="" />
      </div>


      <div className='aboutme-right-section'>
        <h1>About Me</h1>

        <h2>
          A dedicated Frontend Developer based in Karachi, Pakistan. 📍
        </h2>


        <p>
          As a Junior Frontend Developer, I possess an impressive arsenal of skills in <span>HTML5</span> , <span>CSS3</span>, <span>JavaScript</span>, <span>ReactJS</span>. I excel in designing and maintaining <span>responsive websites</span> that offer a smooth user experience. My expertise lies in crafting <span>dynamic</span>, engaging interfaces through writing <span>clean</span> and <span>optimized code</span> and utilizing cutting-edge development tools and techniques. I am also a <span>team player</span> who thrives in collaborating with cross-functional teams to produce outstanding web applications.
        </p>
      </div>
    </div>
  )
}

export default AboutMe