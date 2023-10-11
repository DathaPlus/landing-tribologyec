import { ICarousel } from '@dathaplus/storybook';
import { ICatalogueItem } from '@interfaces/catalogue';

export const catalogueCarouselProps: Omit<ICarousel<any>, 'Element' | 'modules' | 'data'> = {
  id: 'catalogueListCarousel',
  slidesPerView: 1,
  spaceBetween: 1,
  pagination: {
    el: '#carousel_catalogues_pag',
  },
  navigation: {
    nextEl: '#carousel_catalogue_next',
    prevEl: '#carousel_catalogue_prev',
  },
};

export const { nextEl, prevEl } = catalogueCarouselProps.navigation as {
  nextEl: string;
  prevEl: string;
};

export const getCatalogueCarouselId = (id: string) => id.split('#')[1];

export const cataloguesInfo: Array<ICatalogueItem> = [
  { link: 'https://google.com', img: 'agroscopio.webp' },
  { link: 'https://google.com', img: 'amerinode.webp' },
  { link: 'https://google.com', img: 'hanaska.webp' },
  { link: 'https://google.com', img: 'hughnes.webp' },
  { link: 'https://google.com', img: 'johannes_kepler.webp' },
  { link: 'https://google.com', img: 'liftit.webp' },
  { link: 'https://google.com', img: 'megat.webp' },
  { link: 'https://google.com', img: 'nitzan.webp' },
  { link: 'https://google.com', img: 'poliestudios.webp' },
  { link: 'https://google.com', img: 'qualipharm.webp' },
  { link: 'https://google.com', img: 'red_facilito.webp' },
  { link: 'https://google.com', img: 'renovallanta.webp' },
  { link: 'https://google.com', img: 'serpader.webp' },
  { link: 'https://google.com', img: 'telcombas.webp' },
  { link: 'https://google.com', img: 'tinsa.webp' },
  { link: 'https://google.com', img: 'tracendio.webp' },
  { link: 'https://google.com', img: 'indufrance.webp' },
  { link: 'https://google.com', img: 'corral_rosales.webp' },
  { link: 'https://google.com', img: 'loteria_nacional.webp' },
];
