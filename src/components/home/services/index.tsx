'use client';
import React from 'react';
import {listServices} from '@data/home/services';
import {Carousel, Icon} from '@dathaplus/storybook';
import {CardService} from "@components/cards/cardService";
import {listProducts} from "@data/home/products";
import {Pagination, Navigation} from "swiper";
import {IServicesHomeSection} from "@interfaces/home";
import {GridService} from "@components/home/services/gridService";

export const Services = (params: IServicesHomeSection) => {
  return (
    <section className="home_services">
      <img src="/img/services_bg.png" alt="services" />
      <div className="services__wrapper">
        <h2 className="services__title">
          <span>Nuestros</span>
          <span>Servicios</span>
        </h2>

          <ul style={{border: '1px solid blue', display: "flex", width: '600px'}}>
            <Carousel
                Element={CardService}
                data={listServices}
                modules={[Pagination, Navigation]}
                slidesPerView={4}/>
          </ul>



        {/*<ul className="services__list-services">
          {listServices.map(({icon, title, desc}, idx) => (
            <li key={idx}>
              {icon && <Icon {...icon} />}
              <strong>{title}</strong>
              <span>{desc?.join(" ")}</span>
            </li>
          ))}
        </ul>*/}

        {/*<ul className="services__list-services">
          {listServices.map(({icon, title, desc}, idx) => (
            <li key={idx}>
              {icon && <Icon {...icon} />}
              <strong>{title}</strong>
              <span>{desc}</span>
            </li>
          ))}
        </ul>*/}
        {/*<div className="services__list-services">
          {listServices.map(({icon, title, desc}, idx) => (
            <li key={idx}>
              {icon && <Icon {...icon} />}
              <strong>{title}</strong>
              <span>{desc}</span>
            </li>
          ))}
          <GridService l />
        </div>*/}
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
