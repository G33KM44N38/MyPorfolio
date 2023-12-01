import React from 'react'
import './Nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {BsFillBookFill} from 'react-icons/bs'
import * as fa from 'react-icons/fa'
import {Link} from 'react-scroll'

const Nav = () => {

  return (
    <nav>
      <Link to="header" spy={true} smooth={true} duration={500}><AiFillHome/></Link>
      <Link to="about" spy={true} smooth={true} duration={500}><FaUserAlt/></Link>
      <Link to="experience" spy={true} smooth={true} duration={500}><BsFillBookFill/></Link>
      <Link to="contact" spy={true} smooth={true} duration={500}><fa.FaComments/></Link>
    </nav>
  )
}

export default Nav
