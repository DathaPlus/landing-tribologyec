import React, { FC } from 'react';
import { Icon } from '@dathaplus/storybook';
import { IHomeServicesProd } from '@interfaces/home';


export const GridService: FC<IHomeServicesProd> = ({ product }: IHomeServicesProd) => (
  <ul className="services__list-services">
    {product.map(({ icon, title, desc }, idx) => (
      <li key={idx}>
        {icon && <Icon {...icon} />}
        <strong>{title}</strong>
        <span>{desc}</span>
      </li>
    ))}
    
  </ul>
);
