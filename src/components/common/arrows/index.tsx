'use client';
import React from 'react';
import { Icon } from '@dathaplus/storybook';
// TODO: unificar esta interfaz con el Type Props de este archivo
import { IArrowsCarousel } from '@interfaces/common';

type Props = {
  type?: 'left' | 'right';
  id?: string;
  positionH?: number;
  top?: number | string;
  relative?: boolean;
  className?: string;
};

export const ArrowsCarousel = ({
   type = 'left',
   id,
   positionH: position = 30,
   relative = false,
   top = '50%',
}: Props) => (
  <div
    className={`arrow_carousel arrow_carousel_${type}}`}
    id={id}
    style={{ [type]: position, position: relative ? 'relative' : 'absolute', top }}
  >
    <Icon name={`arrow-${type}-circle`} />
  </div>
);
