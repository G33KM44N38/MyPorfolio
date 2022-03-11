import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Gestion d'ingredient",
    github: 'https://github.com',
    demo: '',
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
                  <h3>{title}</h3>
                  <div className="portfolio_item-cta">
                    <a href={github} rel="noreferrer" className='btn' target='_blank'>Github</a>
                    <a href={demo} rel="noreferrer" className='btn btn-primary' target='_blank'>Live Demo</a>
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