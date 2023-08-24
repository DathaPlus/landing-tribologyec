'use client';
import { LinkCustom } from '@components/link';
import { Carousel, Icon } from '@dathaplus/storybook';
import { CarouselProductsProps, viewAllProductsProps } from '@helpers/home';
import React, { FC } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Card } from './card';
import {ICardProduct} from "@interfaces/home";

export const Products: FC<{products: ICardProduct[]}> =  ({products  }) => {

  return (
    <div className="home__products">
      <div className="home__products_wrapper">
        <h4>Productos</h4>

        <div className="products__list">
          <ul>
            <Carousel
              {...CarouselProductsProps}
              data={products}
              Element={Card}
              modules={[Pagination, Navigation]}
            />

            <div className="products__arrow_wrapper_left" id="product_arrow_left">
              <Icon name="arrow-left-circle" />
            </div>
            <div className="products__arrow_wrapper_right" id="product_arrow_right">
              <Icon name="arrow-right-circle" />
            </div>
          </ul>
        </div>

        <div className="products__view-all">
          <LinkCustom {...viewAllProductsProps}>
            <span>ver todos</span>
            <span>
              <Icon name="arrow-right-circle" />
            </span>
          </LinkCustom>
        </div>
      </div>
    </div>
  );
};
