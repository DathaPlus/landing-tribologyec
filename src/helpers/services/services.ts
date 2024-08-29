import { ICarousel } from '@dathaplus/storybook';
import { ILink } from '@interfaces/link';
import { ICard } from '@interfaces/common/ICard';

export const CarouselPropsServices: Omit<ICarousel<ICard>, 'Element' | 'modules' | 'data'> = {
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
