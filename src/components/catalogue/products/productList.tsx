'use client';
import React, { ChangeEvent, FC, FormEvent, HTMLAttributes, useState } from 'react';
import { TextInput } from '@dathaplus/storybook';
import { ICatalogueProduct } from '@interfaces/catalogue';
import Image from 'next/image';

export const ProductList: FC<{ products?: ICatalogueProduct[] }> = ({ products }) => {
  const [filter, setFilter] = useState(products);

  const handleFilterProducts = (
    e: FormEvent<HTMLAttributes<HTMLInputElement>> | ChangeEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();
    const { value } = e.currentTarget as HTMLInputElement;
    setFilter(
      products?.filter((product) => product.name.toLowerCase().includes(value.toLowerCase())),
    );
  };

  return (
    <div className="catalogue-products">
      <p className="catalogue-products__title">
        <span>productos</span>
        <span>destacados</span>
      </p>

      <div className="catalogue-products__list">
        <TextInput
          onChange={handleFilterProducts}
          placeholder="Filtra el área que buscas"
          size="wide"
          colorStyle="secondary"
          icons={{
            right: {
              name: 'search',
              svg: {
                color: 'gray',
              },
            },
          }}
        />

        {filter?.length ? (
          <div className="catalogue-products__list-items">
            {filter?.map((product, idx) => (
              <a
                key={`${idx}_${product.id}`}
                className="item"
                href="https://google.com"
                target="_blank"
                rel="noreferrer"
              >
                <span>{product.name}</span>
                <Image
                  width={100}
                  height={100}
                  src={product.images[0].src}
                  alt={product.id.toString()}
                />
                <span>{product.name}</span>
              </a>
            ))}
          </div>
        ) : (
          <div className="catalogue-products__no-items">No hay productos</div>
        )}
      </div>
    </div>
  );
};
