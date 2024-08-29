'use client';
import React, { Dispatch, useState } from 'react'
import { GridService } from '@components/home/services/gridService';
import { Carousel } from '@dathaplus/storybook';
import { Navigation, Pagination } from 'swiper';
import {servicesData} from './servicesData'

type TActiveSlide = {
  active: number;
  quantitySlide: number;
};


export const Services = () => {
  const [activeSlide, setActiveSlide]: [
    TActiveSlide,
    Dispatch<React.SetStateAction<TActiveSlide>>,
  ] = useState<TActiveSlide>({
    active: 0,
    quantitySlide: servicesData.length,  
  });

  return (
    <section className="home_services">
      <img src="/img/services_bg.png" alt="services" />
      <div className="services__wrapper">
        <h2 className="services__title">
          <span>Quienes</span>
          <span>Somos</span>
        </h2>

        <div className="services__list_service">
          <Carousel
            autoHeight
            pagination={{
              clickable: true,
              renderBullet: (index: number, className: any) =>
                '<span class="' +
                className +
                ' swiper-carrousel-dots-color"></span>',
            }}
            navigation={{
              prevEl: '#product_arrow_left',
              nextEl: '#product_arrow_right',
            }}
            Element={GridService}
            data={[{
              product: servicesData,
              className: {
                left: activeSlide.active === 0 ? 'arrow_carousel_left-disabled' : '',
                right:
                  activeSlide.active === activeSlide.quantitySlide - 1
                    ? 'arrow_carousel_right-disabled'
                    : '',
              },
            }]}
            modules={[Pagination, Navigation]}
            slidesPerView={1}
            id={String(5954)}
            onSlideChange={(e) =>
              setActiveSlide({ active: e.activeIndex, quantitySlide: e.slides.length })
            }
          />
        </div>

        <div className="services__wrapper_testimonial">
          <h5 className="services__wrapper_testimonial__mission">MISIÓN</h5>
          <p className="services__wrapper_testimonial__mission-description">
            Apoyamos a los departamentos de ingeniería y mantenimiento de las industrias del país,
            comercializando bienes y servicios confiables en armonía con los objetivos técnicos y económicos de cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
};
