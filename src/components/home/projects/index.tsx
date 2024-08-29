'use client';
import { LinkCustom } from '@components/link';
import { Carousel, Icon, SwiperModules } from '@dathaplus/storybook';
import { CarouselProps, viewAllProps } from '@helpers/home';
import React from 'react';
import { Card } from './card';

export const OurProjects = () => (
  <div className="home__projects">
    <h3 className="projects__title">
      <span>últimos</span>
      <strong>proyectos</strong>
    </h3>

    <ul className="projects__list">
      <Carousel {...CarouselProps} Element={Card} modules={[SwiperModules.Pagination]} />
    </ul>

    <div className="projects__view-all">
      <LinkCustom {...viewAllProps}>
        <span>ver todos</span>
        <span>
          <Icon name="arrow-right-circle" />
        </span>
      </LinkCustom>
    </div>
  </div>
);
