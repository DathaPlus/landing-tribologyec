'use client';
import React from 'react';
import { IHero } from '@interfaces/base/layout/IHero';
import {HeroProps} from '@interfaces/base/layout/HeroProps'

export const Hero: React.FC<HeroProps> = ({
  image,
  style,
  title ,
  description ,
}) => (
  <div className="hero" style={{ backgroundImage: `url(${image})`, height: style?.height, backgroundColor: "#4B4F58" }}>
    <div className="hero__content" style={style}>
      <h1 className="hero__title">Contacto</h1>
      <span className="hero__description">{description}</span>
    </div>
  </div>
);
