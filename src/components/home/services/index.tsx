import { listServices, serviceTestimonial } from '@data/home';
import { Carousel, Icon } from '@dathaplus/storybook';
import React from 'react';
import { Pagination } from 'swiper';

import { TestimonialService } from './testimonial';

export const Services = () => {
  return (
    <section className="home_services">
      <img src="/img/services_bg.png" alt="services" />
      <div className="services__wrapper">
        <h2 className="services__title">
          <span>Nuestros</span>
          <span>Servicios</span>
        </h2>

        <ul className="services__list-services">
          {listServices.map(({ icon, title, desc }, idx) => (
            <li key={idx}>
              {icon && <Icon {...icon} />}
              <strong>{title}</strong>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
        <div className="services__wrapper_testimonial">
          <div>
            <Carousel
              pagination={true}
              modules={[Pagination]}
              Element={TestimonialService}
              data={serviceTestimonial}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
