'use client';
import React from 'react';
import {IHeroBanner} from "@interfaces/common";

export const Hero = (params: IHeroBanner) => (
  <div className="hero" style={{backgroundImage: `url(/img/hero-bg/${params.bgImg ?? 'main.png'})`}}>
    <div className="hero__content">
      <h1 className="hero__title">{params?.title}</h1>
      <span className="hero__subtitle">
        {params?.subtitle}
      </span>
      <span className="hero__welcome">{params?.welcome}</span>
      <span className="hero__description">
        {params?.description}
      </span>
    </div>
  </div>
);
