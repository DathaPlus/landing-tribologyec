import { listCardsServices } from '@data/services/services';
import { ICarousel } from '@dathaplus/storybook';
import { ICardProject } from '@interfaces/home';
import { ILink } from '@interfaces/link';

export const CarouselPropsServices: Omit<ICarousel<ICardProject>, 'Element' | 'modules'> = {
  data: listCardsServices,
  slidesPerView: 'auto',
  spaceBetween: 10,
  slidesPerGroup: 1,
  autoHeight: true,
  centeredSlides: true,
  pagination: true,
  breakpoints: {
    550: {
      centeredSlides: false,
      spaceBetween: 10,
      slidesPerView: 2,
    },
    1150: {
      centeredSlides: false,
      spaceBetween: 50,
      slidesPerView: 3,
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
