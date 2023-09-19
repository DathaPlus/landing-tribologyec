'use client';
import React from 'react';
import { Carousel, Icon, SwiperModules } from '@dathaplus/storybook';
import { AboutusCard } from '@components/cards';
import { goalsPageIcons } from '@data/nosotros';
import { CarouselAboutusCardsProps } from '@helpers/aboutus';
import { IAboutusPage } from '@interfaces/app/IAboutusPage';

export const AboutusCarousel = ({carouselAboutus}: Pick<IAboutusPage, 'carouselAboutus'>) => {
  return (
    <div className="aboutus__container">
      <div className="aboutus__container__carrousel">
        <Carousel
          {...CarouselAboutusCardsProps}
          Element={AboutusCard}
          data={
            carouselAboutus?.map((goal) => ({
              icon: goalsPageIcons[
                (goal.icon || 'whiteOutlinedPointer') as keyof typeof goalsPageIcons
              ],
            title: goal.title || '',
            description:
            goal.description || '',
            information:
            goal.information || ''
            })) || []
          }
          modules={[SwiperModules.Pagination, SwiperModules.Navigation]}
        />
        <div className="aboutus__arrow_wrapper_left" id="aboutus_arrow_left">
              <Icon name="arrow-left-circle" />
            </div>
            <div className="aboutus__arrow_wrapper_right" id="product_arrow_right">
              <Icon name="arrow-right-circle" />
            </div>
      </div>
    </div>
  );
};
