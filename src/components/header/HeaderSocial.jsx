import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a rel="noreferrer" href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
        <a rel="noreferrer" href='https://github.com' target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocial