import { ICarousel } from '@dathaplus/storybook';
import { IGoalsAboutus } from '@interfaces/app/IAboutusPage';

export const CarouselAboutusCardsProps: Omit<
  ICarousel<IGoalsAboutus>,
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
      slidesPerView: 1,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1250: {
      spaceBetween: 10,
      slidesPerView: 3,
    },
  },
  className: 'aboutus__container__carrousel-swiper',
};
