'use client';
import { Carousel, SwiperModules } from '@dathaplus/storybook';
import { CarouselPropsServices } from '@helpers/services';
import React from 'react';
import { Card } from './card';
import { IOurServices } from '@interfaces/app/IServicesPage';
import { ICard } from '@interfaces/common/ICard';

export const OurServices = ({ services, title, subtitle }: IOurServices) => (
  <div className="services__ourServices">
    <h3 className="services__title">
      <span>{title}</span>
      <strong>{subtitle}</strong>
    </h3>
    <div className="services__list">
      <ul>
        <Carousel
          {...CarouselPropsServices}
          data={services as ICard[]}
          Element={Card}
          modules={[SwiperModules.Pagination]}
        />
      </ul>
    </div>
  </div>
);
