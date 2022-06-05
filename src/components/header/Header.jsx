import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import { AiOutlineCaretDown } from 'react-icons/ai';
import styles from './header.module.css';

const header = () => {
  return (
    <header>
      <div className={`container ${styles.header__container}`}>
        <HeaderSocials />
        <div className={styles.header_title__container}>
          <div>
            <h5>Hello, I'm Terel</h5>
            <h1>
              I'm a Front-End Software Engineer, average food enjoyer, part-time
              bodybuilder, and competitive gamer.
            </h1>
          </div>
        </div>

        <CTA />
        <AiOutlineCaretDown id={styles.arrowIcon} />
      </div>
      <a href="#contact" className={styles.scroll__down}>
        Scroll Down
        <AiOutlineCaretDown />
      </a>
    </header>
  );
};

export default header;
