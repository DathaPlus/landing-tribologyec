'use client';
import React from 'react';
import Image from 'next/image';
import commitment1 from '@assets/img/commitment/commitment_1.png';
import commitment2 from '@assets/img/commitment/commitment_2.png';
import commitment3 from '@assets/img/commitment/commitment_3.png';
import { IOurCommitment } from '@interfaces/app/IServicesPage';

export const OurCommitment = (params: IOurCommitment) => {
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
        <p className="description">{params.description}</p>
      </div>
    </div>
  );
};
