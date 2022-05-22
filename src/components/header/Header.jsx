import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div id="header" className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Kylian Mayanga-Fournier</h1>
        <h5 className='text-light'>Front-End Developper</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt='' />
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header