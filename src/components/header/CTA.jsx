import React from 'react';
import CV from '../../assets/Terel_Phillips_Resume_28-04-2022-18-53-21.pdf';
import styles from './header.module.css';

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
