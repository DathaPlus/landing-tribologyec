import { ICategory } from '@interfaces/server/common/IGetCategoriesProducts';

export const getCategoriesProducts = async (): Promise<ICategory[]> => {
  try {
    const response = await fetch(
      `${process.env.TRIBOLOGY_BACKEND}/wp-json/wc/v3/products/categories`,
      {
        method: 'GET',
        headers: {
          Authorization: process.env.TOKEN_BACKEND || '',
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
