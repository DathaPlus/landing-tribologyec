import { IGetProducts } from '@interfaces/server/common/IGetProducts';
import { getCategoriesProducts } from '@server/common/getCategoriesProducts';
import { ICategory } from '@interfaces/server/common/IGetCategoriesProducts';
import { IGetPromiseProductsResponse } from '@interfaces/server/common/IGetPromiseProductsResponse';

export const getProducts = async (params?: IGetProducts): Promise<IGetPromiseProductsResponse> => {
  try {
    const { next, page = 1, perPage = 10, filter } = params || {};

    const category: ICategory | undefined = await getCategoryFromName(filter?.category);

    const response = await fetch(
      `${
        process.env.BASE_PATH_WORDPRESS_BACKEND
      }/wp-json/wc/v3/products?per_page=${perPage}&page=${page}${
        category ? `&category=${category.id}` : ''
      }`,
      {
        method: 'GET',
        headers: {
          Authorization: process.env.TOKEN_WOOCOMMERCE_BACKEND || '',
          Accept: '*/*',
        },
        next,
      },
    );

    if (!response.ok) throw new Error(response.statusText);

    const data = await response.json();

    return {
      products: data.map((product: any) => ({
        description: product.name,
        category: product.categories?.[0]?.name || 'No category',
        img: product.images?.[0]?.src || '',
      })),
      pagination: {
        totalPages: Number(response.headers.get('X-WP-TotalPages') ?? 1),
        totalProducts: Number(response.headers.get('X-WP-Total') ?? 1),
      },
    };
  } catch (e) {
    console.error('Error in getProducts: ', e);

    return {
      products: [],
      pagination: {},
    };
  }
};

const getCategoryFromName = async (name?: string): Promise<ICategory | undefined> => {
  if (!name) return undefined;

  const categories: ICategory[] = await getCategoriesProducts();

  return categories.find((category) => category.name === name);
};
