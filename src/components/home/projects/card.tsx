import { LinkCustom } from '@components/link';
import { ICardProject } from '@interfaces/home';
import React, { FC } from 'react';

export const Card: FC<ICardProject> = ({ title, img, link }) => {
  return (
    <li className="projects__card">
      <LinkCustom {...link}>
        <div />
        <span>{title}</span>
        <img src={img} alt="project" width="100%" height="100%" />
      </LinkCustom>
    </li>
  );
};
