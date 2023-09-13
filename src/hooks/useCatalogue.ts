import { BREAKPOINTS, IBreakpointList, ICatalogueItem, TBreakpoint } from '@interfaces/catalogue';
import { CatalogueItemServerRender } from '@components/catalogue/carousel/catalogueItem';
import { useCallback, useRef, useEffect } from 'react';

export const useCatalogue = (elements?: ICatalogueItem[]) => {
  const parentCarousel = useRef<HTMLDivElement>(null);

  const ElementsBySlide = useCallback((vector: ICatalogueItem[] = [], multiplo = 6) => {
    const n = vector.length;
    const matriz: ICatalogueItem[][] = [];
    let cursor = 0;

    for (let i = 0; i < n; i++) {
      if (i % multiplo === 0) {
        matriz[cursor] = [];
      }

      matriz[cursor].push(vector[i]);

      if (matriz[cursor].length === multiplo) {
        cursor++;
      }
    }

    return matriz;
  }, []);

  const createElements = useCallback((numberElements: number) => {
    const carousel = (parentCarousel.current as HTMLDivElement).firstElementChild as HTMLElement;
    const wrapper = carousel.firstElementChild as HTMLElement;
    const m = ElementsBySlide(elements, numberElements);

    const removeAllChild = (node: HTMLElement) => {
      if (!node) return;
      while (node.firstChild && node.lastChild) {
        node.removeChild(node.lastChild);
      }
    };

    removeAllChild(wrapper);

    for (let i = 0; i < m.length; i++) {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide', 'catalogue-list__catalogues');

      for (let j = 0; j < m[i].length; j++) {
        slide.innerHTML += CatalogueItemServerRender(m[i][j]);
      }
      wrapper.appendChild(slide);
    }
  }, []);

  const breakpointCarouselT = ({ matches }: { matches: boolean }, breakpoint: TBreakpoint) => {
    const xsq = breakpoint === 'xs' && !matches;
    const smq = breakpoint === 'sm' && matches;
    const mmq = breakpoint === 'md' && matches;
    const lmq = breakpoint === 'lg' && matches;
    const xmq = breakpoint === 'xl' && matches;

    if (xsq) {
      createElements(3);
    } else if (smq) {
      createElements(6);
    } else if (mmq) {
      createElements(9);
    } else if (lmq) {
      createElements(12);
    } else if (xmq) {
      createElements(15);
    }
  };

  useEffect(() => {
    const mq = (query: BREAKPOINTS, rangeQuery?: BREAKPOINTS) =>
      window?.matchMedia(
        rangeQuery
          ? `(min-width: ${query}px) and (max-width: ${rangeQuery}px)`
          : `(min-width: ${query}px)`,
      );

    const xs = mq(BREAKPOINTS.xs);
    const sm = mq(BREAKPOINTS.xs, BREAKPOINTS.sm);
    const md = mq(BREAKPOINTS.sm, BREAKPOINTS.md);
    const lg = mq(BREAKPOINTS.md, BREAKPOINTS.lg);
    const xl = mq(BREAKPOINTS.lg);

    const breakPointsClients: IBreakpointList[] = [
      { size: sm, breakPoint: 'sm' },
      { size: xs, breakPoint: 'xs' },
      { size: md, breakPoint: 'md' },
      { size: lg, breakPoint: 'lg' },
      { size: xl, breakPoint: 'xl' },
    ];

    breakPointsClients.forEach(({ size, breakPoint }) => {
      breakpointCarouselT(size, breakPoint);
      size.addEventListener('change', (e) => breakpointCarouselT(e, breakPoint));
    });
  }, []);

  return { ElementsBySlide, breakpointCarouselT, parentCarousel };
};
