import React from 'react'
import './Footer.css'
import {BsGithub} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {SiFiverr} from 'react-icons/si'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer_logo'>Kylian Mayanga-Fournier</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://github.com/G33KM44N38" target="_blank"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/kylian-mayanga-fournier-a60a75198/" target="_blank"><AiFillLinkedin/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Kylian Mayanga. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer