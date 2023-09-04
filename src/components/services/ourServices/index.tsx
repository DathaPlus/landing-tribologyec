'use client';
import { Carousel, SwiperModules } from '@dathaplus/storybook';
import { CarouselPropsServices } from '@helpers/services';
import React from 'react';
import { Card } from './card';

export const OurServices = () => (
  <div className="services__ourServices">
    <h3 className="services__title">
      <span>NUESTROS</span>
      <strong>SERVICIOS</strong>
    </h3>
    <div className="services__list">
      <ul>
        <Carousel {...CarouselPropsServices} Element={Card} modules={[SwiperModules.Pagination]} />
      </ul>
    </div>
  </div>
);
