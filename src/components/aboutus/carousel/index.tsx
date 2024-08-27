'use client';
import React from 'react';
import { Carousel, SwiperModules } from '@dathaplus/storybook';
import { AboutusCard } from '@components/cards';
import {carouselAbout} from '@data/nosotros';
import { CarouselAboutusCardsProps } from '@helpers/aboutus';

export const AboutusCarousel = () => {
  const PREV = 'aboutus_arrow_left';
  const NEXT = 'product_arrow_right';

  return (
    <div className="aboutus__container">
      <div className="aboutus__container__carrousel">
        <Carousel
          {...CarouselAboutusCardsProps({
            prevEl: `#${PREV}`,
            nextEl: `#${NEXT}`,
          })}
          Element={AboutusCard}
          data={
            carouselAbout?.map((goal) => ({
              icon: goal.icon,
              title: goal.title || '',
              description: goal.description || '',
              information: goal.information || '',
            })) || []
          }
          modules={[SwiperModules.Pagination, SwiperModules.Navigation]}
        />
        {/*<div className="aboutus__arrow_wrapper_left" id={PREV}>
              <Icon name="arrow-left-circle" />
            </div>
            <div className="aboutus__arrow_wrapper_right" id={NEXT}>
              <Icon name="arrow-right-circle" />
            </div>*/}
      </div>
    </div>
  );
};
