import React from 'react'
import './Nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {MdHomeRepairService} from 'react-icons/md'
import {BsFillBookFill} from 'react-icons/bs'
import {AiFillMessage} from 'react-icons/ai'
import {FaComments} from 'react-icons/fa'
import { useState } from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><AiFillHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''} ><FaUserAlt/></a>
      <a href='#experience'onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : ''}><BsFillBookFill/></a>
      <a href='#service'onClick={() => setActiveNav('#service')} className={activeNav === "#service" ? 'active' : ''}><MdHomeRepairService/></a>
      <a href='#testimonials'onClick={() => setActiveNav('#testimonials')} className={activeNav === "#testimonials" ? 'active' : ''}><AiFillMessage/></a>
      <a href='#contact'onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><FaComments/></a>
    </nav>
  )
}

export default Nav