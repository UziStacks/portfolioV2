import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import styles from './footer.module.css';

const footer = () => {
  return (
    <footer id="footer">
      <a href="#" className={styles.footer__logo}>
        Terel Phillips
      </a>
      <ul className={styles.permalinks}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className={styles.footer__socials}>
        <a
          href="https://www.linkedin.com/in/terel-phillips-9a8038222/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/UziStacks" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/Terelphillips"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>

      <div className={styles.footer__copyright}>
        <small>Copyright &copy; 2022 - 2023</small>
        {' || '}
        <small>
          Built By{' '}
          <a
            href="https://github.com/UziStacks"
            target="_blank"
            rel="noreferrer"
          >
            @UziStacks
          </a>{' '}
        </small>
      </div>
    </footer>
  );
};

export default footer;
