'use client';
import React from 'react';
import { IHeroBannerHome } from '@interfaces/home';

export const Hero = (params: IHeroBannerHome) => (
  <div
    className="hero"
    style={{ backgroundImage: `url(/img/hero-bg/${params.bgImg ?? 'main.png'})` }}
  >
    <div className="hero__content">
      <h1 className="hero__title">tribologyec</h1>
      <span className="hero__subtitle">Ciencia - Tecnología - Economía para atornillado controlado</span>
      <span className="hero__welcome">Bienvenidos</span>
      <span className="hero__description">En nuestro mundo de “alta tecnología” las uniones atornilladas reciben poca atención, es decir, muchas personas incluidos los ingenieros, desconocen la importancia de las uniones atornilladas, y los pocos que se consideran expertos en atornillado, están relegados en las industrias que enfrentan problemas de atornillado. (J. Bickford, 1995).</span>
    </div>
  </div>
);
