import { useDebounce } from '@hooks/useDebounce';
import { GetPromiseProductsResponse } from '@interfaces/home';
import { getProducts } from '@server/common/getProducts';
import { useState, useEffect, FormEvent, HTMLAttributes, ChangeEvent } from 'react';

export const useProductCatalogueList = (PRODUCTS_PER_PAGE = 3) => {
  const [filter, setFilter] = useState<GetPromiseProductsResponse>({
    products: [],
    pagination: { totalPages: 0, totalProducts: 0 },
  });
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


  useEffect(() => {
    setLoading(true);
    getProducts({ page, perPage: PRODUCTS_PER_PAGE, filter: { category } })
      .then(setFilter)
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  }, [page, category]);

  const handleNextPage = () => {
    setPage((prev) =>
      filter.products.length !== 0 &&
      !loading &&
      filter.products.length >= PRODUCTS_PER_PAGE &&
      prev < Number(filter.pagination.totalPages)
        ? prev + 1
        : prev,
    );
  };

  const handlePrevPage = () => {
    setPage((prev) => (prev > 1 && !loading ? prev - 1 : 1));
  };

  return {
    filter,
    loading,
    handleFilterProducts,
    handleNextPage,
    handlePrevPage,
    page,
  };
};
