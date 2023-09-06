'use client';
import React from 'react';
import { Icon } from '@dathaplus/storybook';
import {IArrowsCarousel} from "@interfaces/common";

export const ArrowsCarousel = ({ type = 'left', id, position = 30, className }: IArrowsCarousel) => (
  <div className={`arrow_carousel arrow_carousel_${type} ${className ? className : ''}`} id={id} style={{ [type]: position }}>
    <Icon name={`arrow-${type}-circle`} />
  </div>
);