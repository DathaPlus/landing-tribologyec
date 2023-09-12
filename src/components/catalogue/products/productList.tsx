'use client';
import React, { ChangeEvent, FormEvent, HTMLAttributes, useState, useEffect } from 'react';
import { TextInput } from '@dathaplus/storybook';
import Image from 'next/image';
import { getProducts } from '@server/common/getProducts';
import { ICardProduct } from '@interfaces/home';
import { useDebounce } from '@hooks/useDebounce';
import { ArrowsCarousel } from '@components/common';

export const ProductList = () => {
  const [filter, setFilter] = useState<ICardProduct[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState('');
  const category = useDebounce(searchTerm, 500);

  const handleFilterProducts = (
    e: FormEvent<HTMLAttributes<HTMLInputElement>> | ChangeEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();
    if (loading) return;
    const { value } = e.currentTarget as HTMLInputElement;
    setSearchTerm(value);
  };
  
  const PERPAGE = 6;

  useEffect(() => {
    setLoading(true);
    getProducts({ page, perPage: PERPAGE, filter: { category } })
      .then(setFilter)
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  }, [page, category]);

  const handleNextPage = () => {
    setPage((prev) =>
      filter.length !== 0 && !loading && filter.length >= PERPAGE ? prev + 1 : prev,
    );
  };

  const handlePrevPage = () => {
    setPage((prev) => (prev > 1 && !loading ? prev - 1 : 1));
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
          disabled={true}
          icons={{
            right: {
              name: 'search',
              svg: {
                color: 'gray',
              },
            },
          }}
        />

        {loading ? (
          <div className="catalogue-products__no-items">Cargando...</div>
        ) : filter?.length ? (
          <div className="catalogue-products__list-items">
            {filter?.map((product, idx) => (
              <a
                key={`${idx}_${new Date().getTime()}`}
                className="item"
                href="https://google.com"
                target="_blank"
                rel="noreferrer"
              >
                <span>{product.category}</span>
                <Image width={100} height={100} src={product.img!} alt={`product_${idx}`} />
                <span>{product.description}</span>
              </a>
            ))}
          </div>
        ) : (
          <div className="catalogue-products__no-items">No hay productos</div>
        )}

        {!loading && (
          <div style={{ display: 'flex', gap: '1em', justifyContent: 'center' }}>
            <span onClick={handlePrevPage}>
              <ArrowsCarousel type="left" relative positionH={0} top={0} />
            </span>
            <span>{page}</span>
            <span onClick={handleNextPage}>
              <ArrowsCarousel type="right" relative positionH={0} top={0} />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
