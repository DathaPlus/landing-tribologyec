import React, {FC} from 'react';
import {Icon} from "@dathaplus/storybook";
import {ICardServiceProd} from "@interfaces/home";

export const GridService: FC<ICardServiceProd[]> = (listServices) => {
  return (
    <>
      {listServices.map(({icon, title, desc}, idx) => (
        <li key={idx}>
          {icon && <Icon {...icon} />}
          <strong>{title}</strong>
          <span>{desc}</span>
        </li>
      ))}
    </>
  )
}
