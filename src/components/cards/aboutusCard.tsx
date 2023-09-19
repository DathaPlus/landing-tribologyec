'use client';
import Image from 'next/image';
import React from 'react';
import { IAboutusCard } from '@interfaces/cards/IAboutusCard';

export const AboutusCard = ({icon, title, description,information}:IAboutusCard) => {
  return (
    <div className="card_aboutus_container">
      <div className="card_aboutus">
        <Image src= {icon} alt="icon-aboutus" width={80} height={80} style={{ margin: '0 auto' }}/>
        <br/>
        <h2 className="aboutus__card-title">{title}</h2>
        <br/>
        <p className="aboutus__card-description">
          {description}
          </p>
          <br/>
          <p className="aboutus__card-information">
          {information}
          </p>
      </div>
    </div>
  );
};