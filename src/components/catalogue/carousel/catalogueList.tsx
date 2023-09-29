'use client';
import React, { Fragment } from 'react';
import { ArrowsCarousel } from '@components/common';
import { Carousel, SwiperModules } from '@dathaplus/storybook';
import { useCatalogue } from '@hooks/useCatalogue';
import {
  catalogueCarouselProps,
  cataloguesInfo,
  getCatalogueCarouselId,
  nextEl,
  prevEl,
} from '@helpers/catalogue/index';

export const CatalogueList = () => {
  const { parentCarousel } = useCatalogue(cataloguesInfo);

  return (
    <div className="catalogue-list">
      <span className="catalogue-list__title">catalogo</span>

      <div ref={parentCarousel} className="catalogue-list__carousel">
        <Carousel
          {...catalogueCarouselProps}
          Element={() => <Fragment />}
          data={[]}
          modules={[SwiperModules.Navigation]}
        />

        <ArrowsCarousel id={getCatalogueCarouselId(prevEl)} type="left" />
        <ArrowsCarousel id={getCatalogueCarouselId(nextEl)} type="right" />
      </div>
    </div>
  );
};
