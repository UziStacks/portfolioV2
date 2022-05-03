import React from 'react';
import { BsCheck } from 'react-icons/bs';
import styles from './servies.module.css';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className={`container ${styles.services__container}`}>
        {/* <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>UI/UX Design</h3>
          </div>
          <ul className={styles.service__list}>
            <li>
              <BsCheck className={styles.service__list__icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list__icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list__icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list__icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list__icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article> */}
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>Web Development</h3>
          </div>
          <ul className={styles.service__list}>
            <li>
              <BsCheck className={styles.service__list__icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list__icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list__icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list__icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list__icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list__icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list__icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>Content Creation</h3>
          </div>
          <ul className={styles.service__list}>
            <li>
              <BsCheck className={styles.service__list__icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list__icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list__icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list__icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list__icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  );
};

export default Services;
