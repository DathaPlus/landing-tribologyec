import { ICatalogueData } from '@interfaces/catalogue';

export const getCataloguePage = async (): Promise<ICatalogueData | undefined> => {
  try {
    const response = await fetch(`${process.env.TRIBOLOGY_BACKEND}/wp-json/wc/v3/products`, {
      method: 'GET',
      headers: {
        Authorization: 'Basic YmFja2VuZE1hbmFnZXI6MExXQiBybWU4IFgyTWcgYktRbyB6dU5FIHB1SjQ=',
        Accept: '*/*',
      },
      next: {
        revalidate: 84600,
      },
    });

    if (!response.ok) throw new Error(response.statusText);

    const products = await response.json();

    return {
      heroBanner: {
        bgImg: 'bg_catalogue.png',
        title: 'TribologyEC',
        description:
          'Una compañía dedicada a la comprensión del comportamiento de los pernos y tornillos en servicio',
      },
      products,
    };
  } catch (e) {
    console.error('Error in getCataloguePage: ', e);
    return undefined;
  }
};
