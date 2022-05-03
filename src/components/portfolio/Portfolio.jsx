import React from 'react';
import { PortfolioData } from './PortfolioData';
import styles from './portfolio.module.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className={`container ${styles.portfolio__container}`}>
        {PortfolioData.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className={styles.portfolio__item}>
              <div className={styles.portfolio__item__image}>
                <img src={image} alt="porfolio1" />
              </div>
              <h3>{title}</h3>
              <div className={styles.portfolio__item__cta}>
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
