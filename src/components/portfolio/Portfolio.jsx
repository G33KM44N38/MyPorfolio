import React from 'react'
import './Portfolio.css'


//image of my project
import WindBnb from '../../assets/WindBnb.png'
import ToDoApp from '../../assets/imgage of project/ToDo/TodoApp.png'

const data = [
  {
    id: 1,
    image: WindBnb,
    title: "WindBnb",
    github: 'https://github.com/G33KM44N38/Windbnb',
    demo: 'https://g33km44n38.github.io/Windbnb/',
  },
  {
    id: 2,
    image: ToDoApp,
    title: "TODO App",
    github: 'https://github.com/G33KM44N38/todo',
    demo: 'https://g33km44n38.github.io/todo/',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return (
              <article className='portfolio_item'>
                  <div key={id} className="portfolio_item-image">
                    <img src={image} alt={title} />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <div className="portfolio_item-cta">
                      <a href={github} rel="noreferrer" className='btn' target='_blank'>Github</a>
                      <a href={demo} rel="noreferrer" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                  </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
