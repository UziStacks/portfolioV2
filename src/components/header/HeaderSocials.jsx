import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import styles from './header.module.css';

const HeaderSocials = () => {
  return (
    <div className={styles.header__socials}>
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
        <FiTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
