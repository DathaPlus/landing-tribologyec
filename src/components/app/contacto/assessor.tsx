'use client';
import React from 'react';
import Image from 'next/image';
import laptopGirl from '@assets/img/laptop_girl.png';
import { IContactPage } from '@interfaces/app/IContactPage';

export const Assessor = ({ assessor }: Pick<IContactPage, 'assessor'>) => {
  const title = assessor?.title?.split('*');

  return (
    <div className="assessor__container">
      <div className="assessor__gray-block" />
      <div className="assessor__content">
        <h1 className="assessor__content__mobile-title">
          {title?.[0]} <span>{title?.[1]}</span> {title?.[2]}
        </h1>
        <div className="assessor__content-left">
          <Image src={laptopGirl} alt="laptopGirl" width={547} height={631} />
        </div>
        <div className="assessor__content-right">
          <div className="assessor__content-right__red-block">
            <h1 className="assessor__content-right__red-block__title">
              {title?.[0]} <span>{title?.[1]}</span> {title?.[2]}
            </h1>
            <p className="assessor__content-right__red-block__description">{assessor?.subtitle}</p>
          </div>
        </div>
        <p className="assessor__content__mobile-description">{assessor?.subtitle}</p>
      </div>
    </div>
  );
};