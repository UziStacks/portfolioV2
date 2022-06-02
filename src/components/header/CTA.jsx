import React from 'react';
import { Link } from 'react-router-dom';
import CV from '../../assets/Terel_Phillips_Resume_02-06-2022-11-49-38.pdf';
import styles from './header.module.css';

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a href={CV} download className="btn">
        Download CV
      </a>
      <Link to="/resume" className="btn">
        View on site
      </Link>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
