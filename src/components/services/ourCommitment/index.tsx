'use client';
import React from 'react';
import Image from 'next/image';
import commitment1 from '@assets/img/commitment/commitment_1.png';
import commitment2 from '@assets/img/commitment/commitment_2.png';
import commitment3 from '@assets/img/commitment/commitment_3.png';

export const OurCommitment = () => {
  return (
    <div className="services__ourCommitment">
      <div className="content">
        <div className="list_image">
          <Image className="image" src={commitment1} alt="image" />
          <Image className="image" src={commitment2} alt="image" />
          <Image className="image" src={commitment3} alt="image" />
        </div>
        <p className="title">
          NUESTRO <span>COMPROMISO</span>
        </p>
        <p className="description">
          Somos profesionales experimentados dispuestos a generar soluciones eficientes de torque,
          cualquiera que sea el rubro de la industria. Te ayudamos a seleccionar la mejor
          herramienta para tu propósito, en rendimiento, presión, calidad y economía.
        </p>
      </div>
    </div>
  );
};

export default OurCommitment;
