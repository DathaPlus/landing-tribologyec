'use client';
import React from 'react';
import { Icon } from '@dathaplus/storybook';
import { IArrowsCarousel } from '@interfaces/common';

export const ArrowsCarousel = ({
  type = 'left',
  id,
  positionH: position = 30,
  relative = false,
  top = '50%',
}: IArrowsCarousel) => (
  <div
    className={`arrow_carousel arrow_carousel_${type}}`}
    id={id}
    style={{ [type]: position, position: relative ? 'relative' : 'absolute', top }}
  >
    <Icon name={`arrow-${type}-circle`} />
  </div>
);
