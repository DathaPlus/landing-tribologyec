import { ICatalogueData } from '@interfaces/catalogue';

export const getCataloguePage = async (): Promise<ICatalogueData | undefined> => {
  try {
  
    return {
      heroBanner: {
        bgImg: 'bg_catalogue.png',
        title: 'TribologyEC',
        description:
          'Una compañía dedicada a la comprensión del comportamiento de los pernos y tornillos en servicio',
      },
    };
  } catch (e) {
    console.error('Error in getCataloguePage: ', e);
    return undefined;
  }
};
