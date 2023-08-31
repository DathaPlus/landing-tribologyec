'use client';
import React from 'react';
import { Carousel } from '@dathaplus/storybook';
import { NetworkCard } from '@components/cards';
import { networksCardsData } from '@data/contacto';
import { Navigation, Pagination } from 'swiper';
import { CarouselNetworkCardsProps } from '@helpers/contacto';

export const Networks = () => {
  return (
    <div className="networks__container">
      <h1 className="networks__container__title">
        También puedes <span>contactarnos</span> por:
      </h1>
      <div className="networks__container__carrousel">
        <Carousel
          {...CarouselNetworkCardsProps}
          Element={NetworkCard}
          data={networksCardsData}
          modules={[Pagination, Navigation]}
        />
      </div>
    </div>
  );
};
