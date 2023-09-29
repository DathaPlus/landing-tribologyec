import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Image from 'next/image';
import { ICatalogueItem } from '@interfaces/catalogue';

export const CatalogueItem = ({ img, link }: ICatalogueItem) => (
  <a className="catalogue-list__catalogues-item" href={link} target="_blank" rel="noreferrer">
    {img && (
      <Image
        width={100}
        height={100}
        src={`/img/catalogues/${img}`}
        alt={`catalogue_${img.split('.')[0]}`}
      />
    )}
  </a>
);

export const CatalogueItemServerRender = (props: ICatalogueItem) =>
  renderToStaticMarkup(<CatalogueItem {...props} />);
