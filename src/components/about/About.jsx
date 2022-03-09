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
            <img src={ME} alt='About image'/>
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
              <small>friends U know</small>
            </article>  

            <article className='about_card'>
              <IoFolderSharp className='about_icon'/>
              <h5>Project</h5>
              <small>personal project</small>
            </article>  
          </div>
          <p>
            amoajf alkjf al akflja f;kas lka;f jaldf jlakjf a a;lfk jaf 
            alkjfadl kf akl;fjf a;lfjkalf jklajf aa flkjalf;kijfalkjfal;kf 
            al;kfja l;fjakljf;ajfakljfaklj;kaljfiuojeoingjak
            al;kfja l;fjakljf;ajfakljfaklj;kaljfiuojeoingjak
            al;kfja l;fjakljf;ajfakljfaklj;kaljfiuojeoingjak
            al;kfja l;fjakljf;ajfakljfaklj;kaljfiuojeoingjak
            al;kfja l;fjakljf;ajfakljfaklj;kaljfiuojeoingjak
            al;kfja l;fjakljf;ajfakljfaklj;kaljfiuojeoingjak
            al;kfja l;fjakljf;ajfakljfaklj;kaljfiuojeoingjak
            al;kfja l;fjakljf;ajfakljfaklj;kaljfiuojeoingjak
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About