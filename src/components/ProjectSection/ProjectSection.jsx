import React from 'react'
import './projectSection.css'

import projectpicture from '../../assets/image.jpeg'

const ProjectSection = () => {

  let projectsData = [
    {
      projectImage: projectpicture,
      projectName: "Portfolio Webiste 😍",
      projectDescription: "This is a Course project. I have worked on this website using ReactJS.",
      projectTagOne: "ReactJs",
      projectTagTwo: "CSS3"

    },
    

  ]

  return (
    <div className='projects-container' id='projects'>
      <h1>Projects</h1>

      <h2>Each project is a unique piece of development 🧩</h2>

      <div className='projects-single-container'>

        {projectsData.map((item) => (
          <>
            <div className='projects-single-image-container'>
              <img src={item.projectImage} alt="" />
            </div>


            <div className='projects-details'>


              <h2>{item.projectName}</h2>


              <p>{item.projectDescription}</p>

              <div className='project-section-tags'>
                <span>{item.projectTagOne}</span>
                <span>{item.projectTagTwo}</span>
              </div>
            </div>
          </>
        ))}

      </div>
    </div>
  )
}

export default ProjectSection