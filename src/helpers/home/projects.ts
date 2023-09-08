import { listCardsProject } from '@data/home/project';
import { ICarousel } from '@dathaplus/storybook';
import { ICardProject } from '@interfaces/home';
import { ILink } from '@interfaces/link';

export const CarouselProps: Omit<ICarousel<ICardProject>, 'Element' | 'modules'> = {
  data: listCardsProject,
  slidesPerView: 'auto',
  spaceBetween: 10,
  slidesPerGroup: 1,
  autoHeight: true,
  centeredSlides: true,
  pagination: true,
  breakpoints: {
    550: {
      centeredSlides: false,
      spaceBetween: 0,
      slidesPerView: 2,
    },
    750: {
      centeredSlides: false,
      spaceBetween: 0,
      slidesPerView: 3,
    },
    1130: {
      spaceBetween: 0,
      centeredSlides: false,
      slidesPerView: 4,
    },
    1300: {
      spaceBetween: 0,
      centeredSlides: false,
      slidesPerView: 5,
    },
  },
};

export const viewAllProps: Omit<ILink, 'children'> = {
  type: 'external',
  href: 'https://www.google.com.ec',
  externalProps: {
    target: '_blank',
    rel: 'noreferrer',
  },
};
