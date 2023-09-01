'use client';
import React from 'react';
import {allServices} from '@data/home/services';
import {IServicesHomeSection} from "@interfaces/home";
import {GridService} from "@components/home/services/gridService";
import {Carousel} from "@dathaplus/storybook";
import {Navigation, Pagination} from "swiper";

export const Services = (params: IServicesHomeSection) => {
  return (
    <section className="home_services">
      <img src="/img/services_bg.png" alt="services" />
      <div className="services__wrapper">
        <h2 className="services__title">
          <span>Nuestros</span>
          <span>Servicios</span>
        </h2>

            <Carousel
              autoHeight
              pagination
              navigation={
                {
                  prevEl: '#product_arrow_left',
                  nextEl: '#product_arrow_right',
                }
              }
                Element={GridService}
                data={allServices}
                modules={[Pagination, Navigation]}
                slidesPerView={1}/>

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
