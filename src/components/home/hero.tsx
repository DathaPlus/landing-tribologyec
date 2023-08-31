'use client';
import React from 'react';
import { IHeroBannerHome } from '@interfaces/home';
import homeHeroBanner from '@assets/img/hero_bg.png';

export const Hero = (params: IHeroBannerHome) => (
  <div className="hero" style={{ backgroundImage: `url(${homeHeroBanner.src})` }}>
    <div className="hero__content">
      <h1 className="hero__title">{params?.title}</h1>
      <span className="hero__subtitle">{params?.subtitle}</span>
      <span className="hero__welcome">{params?.welcome}</span>
      <span className="hero__description">{params?.description}</span>
    </div>
  </div>
);
