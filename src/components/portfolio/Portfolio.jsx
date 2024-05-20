import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/zaikaa.png";
import IMG2 from "../../assets/googlekeepclone.png";
import IMG3 from "../../assets/portfolio.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Zaikaa - Food Ordering Apk",
    github: "https://github.com/Sakib4724/Food-Ordering-App",
    demo: "https://664487fb6dd46289c2f87c4c--zaikaa.netlify.app/",
  },

  {
    id: 2,
    image: IMG2,
    title: "My Keep - Google Keep Clone",
    github: "https://github.com/Sakib4724/googleKeepClone",
    demo: "https://mykeep24.netlify.app/",
  },

  {
    id: 3,
    image: IMG3,
    title: "Responsive Portfolio Website",
    github: "https://github.com/Sakib4724/React-Portfolio-App",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((item, index) => (
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a href={item.github} className="btn" target="_blank">
                Github
              </a>
              <a href={item.demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
