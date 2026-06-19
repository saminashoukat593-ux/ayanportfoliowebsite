import React from 'react'
import './certificatesSection.css'

import { FaAward } from "react-icons/fa"
import certificateImage from '../../assets/image.jpeg'

const CertificatesSection = () => {

  // temporary placeholder image until real certificate images are added
  let placeholderImage = certificateImage;

  let certificatesData = [
    {
      title: "Frontend Development",
      issuer: "Nayee Subah Foundation",
      date: "2026",
      image: placeholderImage
    },
    {
      title: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      image: placeholderImage
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      image: placeholderImage
    },
    {
      title: "MERN Stack Development",
      issuer: "Udemy",
      date: "2024",
      image: placeholderImage
    },
  ]

  return (
    <div className='certificates-container' id='certificates'>
      <h1>Certificates</h1>

      <h2>Proof of continuous learning and growth 🏆</h2>

      <div className='certificates-grid'>
        {certificatesData.map((item, index) => (
          <div className='certificate-card' key={index}>
            <div className='certificate-image'>
              <img src={item.image} alt={item.title} />
            </div>

            <div className='certificate-details'>
              <div className='certificate-icon'>
                <FaAward />
              </div>

              <div>
                <h3>{item.title}</h3>
                <p className='certificate-issuer'>{item.issuer}</p>
                <span className='certificate-date'>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CertificatesSection