'use client';
import React from 'react';
import { IHero } from '@interfaces/base/layout/IHero';

export const Hero = ({ title, subtitle, image }: IHero) => (
  <div className="hero" style={{ backgroundImage: `url(${image})` }}>
    <div className="hero__content">
      <h1 className="hero__title">{title}</h1>
      {subtitle && <span className="hero__description">{subtitle}</span>}
    </div>
  </div>
);
