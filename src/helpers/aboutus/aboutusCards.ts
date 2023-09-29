import { ICarousel } from '@dathaplus/storybook';
import { IGoalsAboutus } from '@interfaces/app/IAboutusPage';
import { NavigationOptions } from 'swiper/types/modules/navigation';

export const CarouselAboutusCardsProps = (navigation:NavigationOptions): Omit<
  ICarousel<IGoalsAboutus>,
  'Element' | 'modules' | 'data'
> => ({
  id: 'aboutus__container__carrousel',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  navigation,

  pagination: {
    clickable: true,
    renderBullet: (index: number, className: any) => {
      return (
        '<span class="' + className + ' swiper-carrousel-dots-color"></span>'
      );
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
});

