import React, { useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css';

const Contact = () => {
  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm(
      'service_cakj761',
      'template_50z1l93',
      form.current,
      'WiCrpnSc6zWxgWb2P'
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className={`container ${styles.contact__container}`}>
        <div className={styles.contact__options}>
          <article className={styles.contact__option}>
            <MdOutlineEmail className={styles.contact__option__icon} />
            <h4>Email</h4>
            <h5>terel.phillips23@gmai.com</h5>
            <a
              href="mailto:terel.phillips23@gmai.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          {/* <article className={styles.contact__option}>
            <RiMessengerLine className={styles.contact__option__icon} />
            <h4>Messenger</h4>
            <h5>terel.phillips23@gmai.com</h5>
            <a
              href="mailto:terel.phillips23@gmai.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className={styles.contact__option}>
            <BsWhatsapp className={styles.contact__option__icon} />
            <h4>Email</h4>
            <h5>terel.phillips23@gmai.com</h5>
            <a
              href="mailto:terel.phillips23@gmai.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article> */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
