import React from 'react'
import './About.css'
import ME from "../../assets/me-about.png"
import { BsFillAwardFill } from 'react-icons/bs'
import { RiUserSettingsFill } from 'react-icons/ri'
import { IoFolderSharp } from 'react-icons/io5'

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about_container">
				<div className="about_me">
					<div className="about_me-image">
						<img src={ME} alt='About me' />
					</div>
				</div>

				<div className="about_content">
					<div className="about_cards">
						<article className='about_card'>
							<BsFillAwardFill className='about_icon' />
							<h5>Experience</h5>
							<small>1 year experience</small>
						</article>

						<article className='about_card'>
							<RiUserSettingsFill className='about_icon' />
							<h5>Client</h5>
							<small>3 clients</small>
						</article>

						<article className='about_card'>
							<IoFolderSharp className='about_icon' />
							<h5>Project</h5>
							<small>mostly personal</small>
						</article>
					</div>
					<p>
						Hello, my name is Kylian. I started coding in 2020 with a small program in the C language.
						Then I tried to enter 42 school, where my passion for coding increased. <br />
						The fact that I want to create a program, application, interface, algorithm that works
						makes me feel so happy. <br />
						That's why I've made coding a huge part of my life.<br />
						I learned almost everything by myself, so I'm autonomous, patient, and I'm a hustler.
					</p>

					<a href="#contact" className='btn btn-primary'>Let's Talk</a>
				</div>
			</div>
		</section>
	)
}

export default About
