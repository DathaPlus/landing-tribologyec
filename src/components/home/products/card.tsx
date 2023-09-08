import { LinkCustom } from '@components/link';
import { ICardProduct } from '@interfaces/home';
import React, { FC } from 'react';

export const Card: FC<ICardProduct> = ({ category, img, link, description }) => (
  <li>
    <div>
      <LinkCustom {...link}>
        <img src={img} alt="tools" />
      </LinkCustom>
    </div>
    <article>
      <span>{category}</span>
      <p>{description}</p>
    </article>
  </li>
);
