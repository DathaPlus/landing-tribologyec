'use client';
import React from 'react';
import {HeroProps} from '@interfaces/base/layout/HeroProps'

export const Hero = ({ image, style }: IHero) => (
  <div className="hero" style={{ backgroundImage: `url(${image})`, height: style?.height, backgroundColor: "#4B4F58" }}>
    <div className="hero__content" style={style}>
      <h1 className="hero__title">NOSOTROS</h1>
      <span className="hero__description">En Tribologyec entendemos lo que pasa cuando un perno esta en servicio, los categorizamos de acuerdo con su función principal y sobre todas las cosas sabemos como instalarlo</span>
    </div>
  </div>
);
