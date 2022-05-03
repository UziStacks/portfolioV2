import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import styles from './experience.module.css';

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className={`container ${styles.experience__container}`}>
        <div className={styles.experience__frontend}>
          <h3>Frontend Development</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsCheckCircleFill className={styles.experience__details__icon} />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsCheckCircleFill className={styles.experience__details__icon} />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsCheckCircleFill className={styles.experience__details__icon} />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsCheckCircleFill className={styles.experience__details__icon} />
              <div>
                <h4>NextJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsCheckCircleFill className={styles.experience__details__icon} />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* <div className={styles.experience__backend}>
          <h3>Backend Development</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsCheckCircleFill className={styles.experience__details__icon} />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsCheckCircleFill className={styles.experience__details__icon} />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsCheckCircleFill className={styles.experience__details__icon} />
              <div>
                <h4>mySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsCheckCircleFill className={styles.experience__details__icon} />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default experience;
