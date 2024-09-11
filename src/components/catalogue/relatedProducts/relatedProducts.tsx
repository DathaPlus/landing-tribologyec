'use client';
import { FC } from 'react';
import { formatSlug, RAW_PRODUCTS } from '@server/common/getProducts';

export const RelatedProducts: FC<{ categories: string[] }> = ({ categories }) => {
  return (
    <div className="detail-products">
      <p className="detail-products__title">
        <span>productos</span>
        <span>relacionados</span>
      </p>

      <div className="detail-products__list">
        <div className="detail-products__list-items">
          {RAW_PRODUCTS.filter((product) =>
            product.categories.some((category) => category.name === categories[0]),
          )
            .slice(0, 4)
            .map((product, index) => (
              <a key={index} href={formatSlug(product.slug)} className="item">
                <img src={product.images[0].src} alt={product.name} />
                <span>{product.categories[0].name}</span>
                <span className="item__description">{product.name}</span>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};
