import { ICarousel } from '@dathaplus/storybook';
import { ICardProduct } from '@interfaces/home';

export const CarouselNetworkCardsProps: Omit<
  ICarousel<ICardProduct>,
  'Element' | 'modules' | 'data'
> = {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  pagination: {
    clickable: true,
    renderBullet: (index: number, className: any) => {
      return '<span class="' + className + ' swiper-carrousel-dots-color"></span>';
    },
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1250: {
      spaceBetween: 10,
      slidesPerView: 4,
    },
  },
  className: 'networks__container__carrousel-swiper',
};
