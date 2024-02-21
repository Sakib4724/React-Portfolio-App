import React from 'react'
import './about.css';
import Me from '../../assets/img2.jpeg'
import { FaAward } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt=''/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <LuUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>

          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae soluta ab omnis eveniet sit fugit labore? Nisi eligendi odio excepturi praesentium? Iusto asperiores voluptates veniam quidem, illo amet. A, asperiores.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>

    </section>
  )
}

export default About