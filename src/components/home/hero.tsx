'use client';
import React from 'react';
import { IHeroBannerHome } from '@interfaces/home';

export const Hero = (params: IHeroBannerHome) => (
  <div
    className="hero"
    style={{ backgroundImage: `url(/img/hero-bg/${params.bgImg ?? 'main.png'})` }}
  >
    <div className="hero__content">
      <h1 className="hero__title">{params?.title}</h1>
      {params?.subtitle && <span className="hero__subtitle">{params?.subtitle}</span>}
      {params?.welcome && <span className="hero__welcome">{params?.welcome}</span>}
      {params?.description && <span className="hero__description">{params?.description}</span>}
    </div>
  </div>
);