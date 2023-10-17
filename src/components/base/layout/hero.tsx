'use client';
import React from 'react';
import { IHero } from '@interfaces/base/layout/IHero';

export const Hero = ({ title, subtitle, image, style }: IHero) => (
  <div className="hero" style={{ backgroundImage: `url(${image})`, height: style?.height }}>
    <div className="hero__content" style={style}>
      <h1 className="hero__title" style={{textAlign:style?.textAlign}}>{title}</h1>
      {subtitle && <span className="hero__description">{subtitle}</span>}
    </div>
  </div>
);
