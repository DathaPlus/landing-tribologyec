'use client';
import { Carousel, SwiperModules } from '@dathaplus/storybook';
import { CarouselPropsServices } from '@helpers/services';
import React from 'react';
import { Card } from './card';
import { IOurServices } from '@interfaces/app/IServicesPage';

export const OurServices = () => (
  <div className="services__ourServices">
    <h3 className="services__title">
      <span>NUESTROS</span>
      <strong>SERVICIOS</strong>
    </h3>
    <div className="services__list">
      <ul>
        <Carousel
          {...CarouselPropsServices}
          data={listCardsProject || []}
          Element={Card}
          modules={[SwiperModules.Pagination]}
        />
      </ul>
    </div>
  </div>
);
