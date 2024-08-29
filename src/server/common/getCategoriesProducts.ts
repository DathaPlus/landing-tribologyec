import { ICategory } from '@interfaces/server/common/IGetCategoriesProducts';
import { CATEGORY_ENUM } from '@server/common/getProducts';

export const getCategoriesProducts = async (): Promise<ICategory[]> => {
  try {
    const response = await fetch(
      `${process.env.BASE_PATH_WORDPRESS_BACKEND}/wp-json/wc/v3/products/categories`,
      {
        method: 'GET',
        headers: {
          Authorization: process.env.TOKEN_WOOCOMMERCE_BACKEND || '',
          Accept: '*/*',
        },
      },
    );

    if (!response.ok) throw new Error(response.statusText);

    const data = await response.json();

    return data.map((category: any) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
    }));
  } catch (e) {
    console.error('Error in getCategoriesProducts: ', e);

    return [];
  }
};

export const getLocalCategories = (): ICategory[] => CATEGORIES

export const CATEGORIES: ICategory[] = [
  {
    id: 1,
    name: "MANUALES",
    slug: "MANUALES",
  },
  {
    id: 2,
    name: "ELECTRICAS",
    slug: "ELECTRICAS",
  },
  {
    id: 3,
    name: CATEGORY_ENUM.JARDINERIA,
    slug: "JARDINERIA",
  },
  {
    id: 4,
    name: CATEGORY_ENUM.MEDICION,
    slug: "MEDICION",
  },
  {
    id: 5,
    name: CATEGORY_ENUM.CONSTRUCCION,
    slug: "CONSTRUCCION",
  },
];