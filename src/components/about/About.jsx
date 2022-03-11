import React from 'react'
import './About.css'
import ME from "../../assets/me-about.png"
import {BsFillAwardFill} from 'react-icons/bs'
import {RiUserSettingsFill} from 'react-icons/ri'
import {IoFolderSharp} from 'react-icons/io5'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt='About me'/>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <BsFillAwardFill className='about_icon'/>
              <h5>Experience</h5>
              <small>1 year experience</small>
            </article>  

            <article className='about_card'>
              <RiUserSettingsFill className='about_icon'/>
              <h5>Client</h5>
              <small>3 clients</small>
            </article>  

            <article className='about_card'>
              <IoFolderSharp className='about_icon'/>
              <h5>Project</h5>
              <small>mostly personal</small>
            </article>  
          </div>
          <p>
            Hello my name Is Kylian, I started code on 2020, by little program, in C language.
            Then I tried to enter to 42 school, that where my passion for coding, increase. <br />
            The fact that I want to make a program, application, interface, algorithm, that work,
            make me feel so happy. <br />
            That's why I make coding a huge part of my life.<br />
            I learned almost everything by myself, so i'm autonomous, patient and I'm a hustler
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About