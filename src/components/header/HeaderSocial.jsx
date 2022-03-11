import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a rel="noreferrer" href='https://www.linkedin.com/in/kylian-mayanga-fournier-a60a75198' target="_blank"><BsLinkedin/></a>
        <a rel="noreferrer" href='https://github.com/G33KM44N38' target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocial