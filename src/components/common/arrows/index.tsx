'use client';
import React from 'react';
import { Icon } from '@dathaplus/storybook';

type Props = {
  type?: 'left' | 'right';
  id: string;
  position?: number;
};

export const ArrowsCarousel = ({ type = 'left', id, position = 30 }: Props) => (
  <div className={`arrow_carousel arrow_carousel_${type}`} id={id} style={{ [type]: position }}>
    <Icon name={`arrow-${type}-circle`} />
  </div>
);
