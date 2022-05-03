import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/me.png';
import styles from './header.module.css';

const header = () => {
  return (
    <header>
      <div className={`container ${styles.header__container}`}>
        <h5>Hello I'm</h5>
        <h1>Terel</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className={styles.me}>
          <img src={ME} alt="devimage" />
        </div>
        <a href="#contact" className={styles.scroll__down}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
