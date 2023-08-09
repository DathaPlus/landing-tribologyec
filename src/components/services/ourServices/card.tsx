import { ICardServices } from '@interfaces/services';
import React, { FC } from 'react';

export const Card: FC<ICardServices> = ({ title, img, description }) => {
  return (
    <li className="services__card">
        <div className="gradient" />
        <span>{title}</span>
        <div className="information">
          <p className="title">{title}</p>
          <p className="description">{description}</p>
        </div>
        <img src={img} alt="service" width="100%" height="100%" />
    </li>
  );
};
