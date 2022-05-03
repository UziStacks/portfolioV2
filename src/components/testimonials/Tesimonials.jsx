import React from 'react';
import { TestimonialsData } from './TestimonialsData';

import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './tesimonials.module.css';

const tesimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className={`container ${styles.testimonials__container}`}
        // install Swiper modules
        modules={[Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={2}
        pagination={{ clickable: true }}
      >
        {TestimonialsData.map(({ avatar, name, review }) => {
          return (
            <SwiperSlide className={styles.testimonial}>
              <div className={styles.client__avatar}>
                <img src={avatar} alt="Avatr 1" />
              </div>
              <h5>{name}</h5>
              <small className={styles.client__review}>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default tesimonials;
