import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const FrontEnd = [
	{
		id: 1,
		name: "REACT.JS",
	},
	{
		id: 2,
		name: "React Native",
	},
]

const BackEnd = [
	{
		id: 1,
		name: "Golang",
	},
	{
		id: 2,
		name: "NodeJS",
	},
	{
		id: 3,
		name: "Database",
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
								FrontEnd.map(({ id, name }) => {
									return (
										<article className='experience_details'>
											<BsFillPatchCheckFill className="experience_details-icon" />
											<div key={id}>
												<h4>{name}</h4>
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
								BackEnd.map(({ id, name }) => {
									return (
										<article className='experience_details'>
											<BsFillPatchCheckFill className="experience_details-icon" />
											<div key={id}>
												<h4>{name}</h4>
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
