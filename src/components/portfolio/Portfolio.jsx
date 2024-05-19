import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Web Development Project-1",
    github: 'https://github.com',
    demo: 'https://github.com'
  },

  {
    id: 2,
    image: IMG1,
    title: "Web Development Project-2",
    github: 'https://github.com',
    demo: 'https://github.com'
  },

  {
    id: 3,
    image: IMG1,
    title: "Web Development Project-3",
    github: 'https://github.com',
    demo: 'https://github.com'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

        <div className="container portfolio__container">

          {
            data.map((item, index) => (
              <article className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={item.image} alt={item.title}/>
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
                <a href={item.github} className='btn' target='_blank'>Github</a>
                <a href={item.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              </article>
              )
            )
          }



        </div>
 
    </section>
  )
}

export default Portfolio