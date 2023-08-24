'use client';
import React from 'react';
import { Icon } from '@dathaplus/storybook';
import {IServicesHomeSection} from "@interfaces/home";

export const Services = (params: IServicesHomeSection) => {
  return (
    <section className="home_services">
      <img src="/img/services_bg.png" alt="services" />
      <div className="services__wrapper">
        <h2 className="services__title">
          <span>Nuestros</span>
          <span>Servicios</span>
        </h2>

        <ul className="services__list-services">
          {params?.carrousel?.map(({ icon, title, description }, idx) => (
            <li key={idx}>
              {icon && <Icon {...icon} />}
              <strong>{title}</strong>
              <span>{description?.join(" ")}</span>
            </li>
          ))}
        </ul>
        <div className="services__wrapper_testimonial">
          <h5 className="services__wrapper_testimonial__mission">{params?.mision?.title}</h5>
          <p className="services__wrapper_testimonial__mission-description">
            {params?.mision?.description}
          </p>
        </div>
      </div>
    </section>
  );
};
