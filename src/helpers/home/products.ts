import { ICarousel } from '@dathaplus/storybook';
import { ICardProduct } from '@interfaces/home';
import { ILink } from '@interfaces/link';

export const CarouselProductsProps: Omit<ICarousel<ICardProduct>, 'Element' | 'modules' | 'data'> = {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  autoHeight: true,
  pagination: true,
  navigation: {
    prevEl: '#product_arrow_left',
    nextEl: '#product_arrow_right',
  },
  breakpoints: {
    350: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    750: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    915: {
      spaceBetween: 25,
      slidesPerView: 5,
    },
  },
};

export const viewAllProductsProps: Omit<ILink, 'children'> = {
  type: 'external',
  href: 'https://www.google.com.ec',
  externalProps: {
    target: '_blank',
    rel: 'noreferrer',
  },
};
