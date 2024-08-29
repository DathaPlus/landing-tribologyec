'use client';
import Image from 'next/image';
import React from 'react';
import { useProductCatalogueList } from '@components/hooks/useProductCatalogueList';
import Search from '@components/catalogue/search';
import { ArrowsCarousel } from '@components/common';
import { getLocalCategories } from '@server/common/getCategoriesProducts';

export const ProductList = () => {
  const { filter, handleFilterProducts, handleNextPage, handlePrevPage, loading, page } =
    useProductCatalogueList(6);
  const allCategories = getLocalCategories();

  return (
    <div className="catalogue-products">
      <p className="catalogue-products__title">
        <span>productos</span>
        <span>destacados</span>
      </p>

      <div className="catalogue-products__list">
        <Search categories={allCategories.map(cat => cat.name)} onChange={handleFilterProducts} />

        {loading ? (
          <div className="catalogue-products__no-items">Cargando...</div>
        ) : filter?.products?.length ? (
          <div className="catalogue-products__list-items">
            {filter?.products?.map((product, idx) =>
              (
                <a
                  key={`${idx}_${new Date().getTime()}`}
                  className="item"
                  href={'productos/' + product.link?.href}
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
        {!loading && filter.pagination.totalPages != 1 && (
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
