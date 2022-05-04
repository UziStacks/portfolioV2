import React, { useState } from 'react';
import { RiHomeHeartLine } from 'react-icons/ri';
import { BiUserPin } from 'react-icons/bi';
import { RiSuitcaseLine } from 'react-icons/ri';
import { MdOutlineRoomService } from 'react-icons/md';
import { TiMessages } from 'react-icons/ti';
import styles from './nav.module.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? styles.active : ''}
      >
        <RiHomeHeartLine />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? styles.active : ''}
      >
        <BiUserPin />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? styles.active : ''}
      >
        <RiSuitcaseLine />
      </a>
      {/* <a
        href="#services"
        onClick={() => setActiveNav('#service')}
        className={activeNav === '#services' ? styles.active : ''}
      >
        <MdOutlineRoomService />
      </a> */}
      <a
        href="#contact"
        onClick={() => setActiveNav('#contant')}
        className={activeNav === '#contant' ? styles.active : ''}
      >
        <TiMessages />
      </a>
    </nav>
  );
};

export default Nav;
