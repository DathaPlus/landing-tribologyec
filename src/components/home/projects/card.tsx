import { LinkCustom } from '@components/link';
import { ICardProject } from '@interfaces/home';
import React, { FC } from 'react';

export const Card: FC<ICardProject> = ({ title, img, link, description }) => {
  return (
    <li className="projects__card">
      <LinkCustom {...link}>
        <div className="projects__card__gradient" />
        <span>{title}</span>
        <div className="projects__card__information">
          <p className="projects__card__title">{title}</p>
          <p className="projects__card__description">{description}</p>
        </div>
        <img src={img} alt="project" width="100%" height="100%" />
      </LinkCustom>
    </li>
  );
};
