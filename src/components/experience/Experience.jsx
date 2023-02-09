import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

var Intermediate = "Intermediate"
var Beginner = "Beginner"
var Experienced = "Experienced"
var Expert = "Expert"



const FrontEnd = [
	{
		id: 1,
		name: "REACT.JS",
		level: Intermediate,
	},
	{
		id: 2,
		name: "HTML",
		level: Experienced
	},
	{
		id: 3,
		name: "CSS",
		level: Intermediate,
	},
	{
		id: 4,
		name: "JAVASCIPT",
		level: Experienced
	}
]

const BackEnd = [
	{
		id: 1,
		name: "Golang",
		level: Experienced
	},
	{
		id: 2,
		name: "NodeJS",
		level: Intermediate
	},
	{
		id: 3,
		name: "MongoDB",
		level: Beginner
	},
]
const Experience = () => {
	return (
		<section id='experience'>
			<h5>Skills I have</h5>
			<h2>
				<div className="container experience_container">

					{/* FRONT-END */}
					<div className="experience_frontend">
						<h3>Frontend Development</h3>
						<div className="experience_content">
							{
								FrontEnd.map(({ id, name, level }) => {
									return (
										<article className='experience_details'>
											<BsFillPatchCheckFill className="experience_details-icon" />
											<div key={id}>
												<h4>{name}</h4>
												<small className='text-light'>{level}</small>
											</div>
										</article>
									)
								})
							}
						</div>
					</div>


					{/* BACK-END */}
					<div className="experience_backend">
						<h3>Backend Development</h3>
						<div className="experience_content">
							{
								BackEnd.map(({ id, name, level }) => {
									return (
										<article className='experience_details'>
											<BsFillPatchCheckFill className="experience_details-icon" />
											<div key={id}>
												<h4>{name}</h4>
												<small className='text-light'>{level}</small>
											</div>
										</article>
									)
								})
							}
						</div>
					</div>
				</div>
			</h2>
		</section>
	)
}

export default Experience
