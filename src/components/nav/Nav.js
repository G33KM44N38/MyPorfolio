import React from 'react'
import './Nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {MdHomeRepairService} from 'react-icons/md'
import {BsFillBookFill} from 'react-icons/bs'
import {AiFillMessage} from 'react-icons/ai'
import {FaComments} from 'react-icons/fa'
import {Link} from 'react-scroll'

const Nav = () => {

  return (
    <nav>
      <Link to="header" spy={true} smooth={true} duration={500}><AiFillHome/></Link>
      <Link to="about" spy={true} smooth={true} duration={500}><FaUserAlt/></Link>
      <Link to="experience" spy={true} smooth={true} duration={500}><BsFillBookFill/></Link>
      <Link to="service" spy={true} smooth={true} duration={500}><MdHomeRepairService/></Link>
      <Link to="testimonials" spy={true} smooth={true} duration={500}><AiFillMessage/></Link>
      <Link to="contact" spy={true} smooth={true} duration={500}><FaComments/></Link>
    </nav>
  )
}

export default Nav