import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/me.png';
import styles from './header.module.css';

const header = () => {
  return (
    <header>
      <div className={`container ${styles.header__container}`}>
        <div className={styles.header_title__container}>
          <HeaderSocials />
          <div>
            <h5>Hello, I'm Terel</h5>
            <h1>
              I'm a Front-End Software Engineer, average food enjoyer, part-time
              bodybuilder, and competive gamer.
            </h1>
          </div>
          <a href="#contact" className={styles.scroll__down}>
            Scroll Down
          </a>
        </div>
        <CTA />

        {/* <h5 className="text-light">FrontEnd Developer</h5> */}

        {/* <div className={styles.me}>
          <img src={ME} alt="devimage" />
        </div> */}
      </div>
    </header>
  );
};

export default header;
