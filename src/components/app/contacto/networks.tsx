'use client';
import React from 'react';
import { Carousel, SwiperModules } from '@dathaplus/storybook';
import { NetworkCard } from '@components/cards';
import { CarouselNetworkCardsProps } from '@helpers/contacto';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { contactos } from './contactos';

gsap.registerPlugin(ScrollToPlugin);

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
          data={contactos}
          modules={[SwiperModules.Pagination, SwiperModules.Navigation]}
        />
      </div>
    </div>
  );
};
