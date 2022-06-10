import React from 'react';
import { GiBiceps } from 'react-icons/gi';
import { GiKeyboard } from 'react-icons/gi';
import { SiPcgamingwiki } from 'react-icons/si';
import ME from '../../assets/uziblue-edited.png';
import styles from './about.module.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className={`container ${styles.about__container}`}>
        <div className={styles.about__me}>
          <div className={styles.about__me__image}>
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className={styles.about__content}>
          <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <GiKeyboard className={styles.about__icon} />
              <h5>Programmer</h5>
              <small>
                Self-taught programmer with a dedication for learning.
              </small>
            </article>
            <article className={styles.about__card}>
              <SiPcgamingwiki className={styles.about__icon} />
              <h5>Gamer</h5>
              <small>
                Passionate competitive gamer for as long as I can reminder.
              </small>
            </article>
            <article className={styles.about__card}>
              <GiBiceps className={styles.about__icon} />
              <h5>Fitness</h5>
              <small>
                I must start my day at the gym because health is wealth.
              </small>
            </article>
          </div>
          <p>
            Hi, I’m a Front-End Developer based out of Toronto, Ontario. I
            aspire to cultivate the skills to build responsive, user-friendly
            and successful websites. My knowledge set consists of html, css and
            javascript. I worked with technologies like NodeJS, ReactJS, and
            Npm. Outside of programming, I’ve worked with Adobe video editor
            premiere pro.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
