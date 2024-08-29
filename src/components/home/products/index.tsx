'use client';
import { Carousel, Icon, SwiperModules } from '@dathaplus/storybook';
import { CarouselProductsProps } from '@helpers/home';
import React, { FC } from 'react';
import { Card } from './card';
import { ICardProduct } from '@interfaces/home';
import {productos } from './Cards'

export const Products: FC<{ products: ICardProduct[] }> = ({ products }) => (
  <div className="home__products">
    <div className="home__products_wrapper">
      <h4>Marcas</h4>

      <div className="products__list">
        <ul>
          {products && (
            <Carousel
              {...CarouselProductsProps}
              data={productos}
              Element={Card}  
              modules={[SwiperModules.Pagination, SwiperModules.Navigation]}
            />
          )}

          <div className="products__arrow_wrapper_left" id="product_arrow_left">
            <Icon name="arrow-left-circle" />
          </div>
          <div className="products__arrow_wrapper_right" id="product_arrow_right">
            <Icon name="arrow-right-circle" />
          </div>
        </ul>
      </div>

{/* TODO: AQUÍ ESTABA EL BTN DE VER TODOS
  <div className="products__view-all">
        <LinkCustom {...viewAllProductsProps}>
          <span>ver todos</span>
          <span>
            <Icon name="arrow-right-circle" />
          </span>
        </LinkCustom>
      </div>*/}
    </div>
  </div>
);
