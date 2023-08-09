'use client';
import React from 'react';
import {listServices} from '@data/home';
import {Icon} from '@dathaplus/storybook';

export const Services = () => {
  return (
    <section className="home_services">
      <img src="/img/services_bg.png" alt="services"/>
      <div className="services__wrapper">
        <h2 className="services__title">
          <span>Nuestros</span>
          <span>Servicios</span>
        </h2>

        <ul className="services__list-services">
          {listServices.map(({icon, title, desc}, idx) => (
            <li key={idx}>
              {icon && <Icon {...icon} />}
              <strong>{title}</strong>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
        <div className="services__wrapper_testimonial">
          <h5 className="services__wrapper_testimonial__mission">MISIÓN</h5>
          <p className="services__wrapper_testimonial__mission-description">
            Apoyamos a los departamentos de ingeniería y mantenimiento de las industrias del país, comercializando
            bienes y servicios que permiten mantener y mejorar los índices de confiabilidad de las uniones empernadas en
            armonía con los objetivos técnicos y económicos de cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
};
