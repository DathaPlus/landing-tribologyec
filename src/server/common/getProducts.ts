import { ICardProduct } from '@interfaces/home';
import { IGetProducts } from '@interfaces/server/common/IGetProducts';
import { getCategoriesProducts } from '@server/common/getCategoriesProducts';
import { ICategory } from '@interfaces/server/common/IGetCategoriesProducts';

export const getProducts = async (params?: IGetProducts): Promise<ICardProduct[]> => {
  try {
    const { next, page = 1, perPage = 10, filter } = params || {};

    const category = await getCategoryFromName(filter?.category);

    const response = await fetch(
      `${
        process.env.TRIBOLOGY_BACKEND_URL
      }/wp-json/wc/v3/products?per_page=${perPage}&page=${page}${
        category ? `&category=${category.id}` : ''
      }`,
      {
        method: 'GET',
        headers: {
          Authorization: process.env.TOKEN_BACKEND_PRODUCTS || '',
          Accept: '*/*',
        },
        next,
      },
    );

    if (!response.ok) throw new Error(response.statusText);

    const data = await response.json();

    return data.map((product: any) => ({
      description: product.name,
      category: product.categories?.[0]?.name || 'No category',
      img: product.images?.[0]?.src || '',
    }));
  } catch (e) {
    console.error('Error in getProducts: ', e);

    return [];
  }
};

const getCategoryFromName = async (name?: string): Promise<ICategory | undefined> => {
  if (!name) return undefined;

  const categories = await getCategoriesProducts();

  return categories.find((category) => category.name === name);
};
