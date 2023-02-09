import React from 'react'
import './Service.css'
import { AiOutlineCheck } from 'react-icons/ai'

const FrontEnd = [
	{
		id: 1,
		name: "Static Website",
	},
	{
		id: 2,
		name: "Dynamic Website",
	},
	{
		id: 3,
		name: "Mobile App",
	},
	{
		id: 4,
		name: "Static Website",
	},
	{
		id: 5,
		name: "Web Application",
	}
]

const BackEnd = [
	{
		id: 1,
		name: "Web API",
	},
	{
		id: 2,
		name: "database",
	},
]

const Service = () => {
	return (
		<section id='service'>
			<h5>What I offer</h5>
			<h2>Services</h2>

			<div className="container services_container">
				<article className='service'>

					<div className="service_head">
						<h3>Frontend</h3>
					</div>

					<ul className='service_list'>
						{
							FrontEnd.map(({ id, name }) => {
								return (

									<li key={id}>
										<AiOutlineCheck className='service_list-icon' />
										<p>{name}</p>
									</li>
								)
							})
						}
					</ul>
				</article>

				<article className='service'>

					<div className="service_head">
						<h3>BackEnd</h3>
					</div>

					<ul className='service_list'>
						{
							BackEnd.map(({ id, name }) => {
								return (

									<li key={id}>
										<AiOutlineCheck className='service_list-icon' />
										<p>{name}</p>
									</li>
								)
							})
						}
					</ul>
				</article>
			</div>
		</section>
	)
}

export default Service
