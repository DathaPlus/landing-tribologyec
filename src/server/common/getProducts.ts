import { IGetProducts } from '@interfaces/server/common/IGetProducts';
import { IGetPromiseProductsResponse } from '@interfaces/server/common/IGetPromiseProductsResponse';
import {IProductDetails} from "../../app/productos/[slug]/page";

export const formatSlug = (slug: string): string => {
  return slug.toLowerCase().replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export const getProducts = async (params?: IGetProducts): Promise<IGetPromiseProductsResponse> => {
  try {
    const { page = 1, perPage = 10, filter } = params || {};

    // const category: ICategory | undefined = await getCategoryFromName(params?.filter?.category);

/*    const response = await fetch(
      `${
        process.env.BASE_PATH_WORDPRESS_BACKEND
      }/wp-json/wc/v3/products?per_page=${perPage}&page=${page}${
        category ? `&category=${category.id}` : ''
      }`,
      {
        method: 'GET',
        headers: {
          Authorization: process.env.TOKEN_WOOCOMMERCE_BACKEND || '',
          */
          // TODO: descomentar el Accept
    // Accept: '*/*',
/*
        },
        next,
      },
    );

    if (!response.ok) throw new Error(response.statusText);

    const products = await response.json();
*/
    const response: IPaginationProducts = getLocalProducts(perPage, page, filter?.category);

    return {
      products: response.products.map((product: IRawProduct) => {
        const formattedSlug = formatSlug(product.slug);


        return {
          description: product.name,
          category: product.categories?.[0]?.name || 'No category',
          img: product.images?.[0]?.src || '',
          link: {
            href: formattedSlug,
          },
        };
      }),
      // TODO: cuando se consume desde Woocommerce se debe tomar en cuenta la paginación
      // pagination: {
      //   totalPages: Number(response.headers.get('X-WP-TotalPages') ?? 1),
      //   totalProducts: Number(response.headers.get('X-WP-Total') ?? 1),
      // },
      pagination: {
        totalPages: response.pagination.totalPages,
        totalProducts: response.pagination.totalProducts,
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

const getLocalProducts = (
  perPage: number,
  page: number,
  category: string = CATEGORY_ENUM.MANUALES
): IPaginationProducts => {
  const filteredProducts = RAW_PRODUCTS.filter((product) =>
    product.categories.some((cat) => cat.name === category)
  );

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / perPage);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  return {
    products: paginatedProducts,
    pagination: {
      totalPages,
      totalProducts,
    },
  };
};

interface IPaginationProducts {
  products: IRawProduct[];
  pagination: {
    totalPages: number;
    totalProducts: number;
  };
}

export enum CATEGORY_ENUM {
  MANUALES = "MANUALES",
  ELECTRICAS = "ELECTRICAS",
  JARDINERIA = "JARDINERIA",
  MEDICION = "MEDICION",
  CONSTRUCCION = "CONSTRUCCION",
}

interface IRawProduct {
  slug: string;
  name: string;
  categories: {
    name: CATEGORY_ENUM;
  }[];
  images: {src: string;}[]
}

/*const getCategoryFromName = async (name?: string): Promise<ICategory | undefined> => {
  if (!name) return undefined;

  // TODO: Aquí las categorías
  // const categories: ICategory[] = await getCategoriesProducts();
  const categories: ICategory[] = CATEGORIES;

  return categories.find((category) => category.name === name);
};*/


export const getProductBySlug = (slug: string): IProductDetails | undefined => {
  const formattedSlug = formatSlug(slug);
  const product = RAW_PRODUCTS.find((product) => {
    const productFormattedSlug = formatSlug(product.slug);
    return productFormattedSlug === formattedSlug;
  });


  if (product) {
    return {
      weight: "6.8 kg",
      brand: "Norbar",
      model: product.name,
      capacity: "676-2700[Nm]",
      certification: "Sí",
      precision: "+/- 3%",
      images: product.images.map(image => ({
        src: image.src,
        alt: product.name,
        width: 800,
        height: 600,
      })),
    };
  }

  return undefined;
};



const RAW_PRODUCTS: IRawProduct[] = [
  {
    slug: "Taladro Eléctrico",
    name: "Taladro Eléctrico",
    categories: [{ name: CATEGORY_ENUM.ELECTRICAS }],
    images: [{ src: "/img/tools/04.png" }],
  },
  {
    slug: "Amoladora Angular",
    name: "Amoladora Angular",
    categories: [{ name: CATEGORY_ENUM.ELECTRICAS }],
    images: [{ src: "/img/tools/03.png" }],
  },
  {
    slug: "Sierra Circular",
    name: "Sierra Circular",
    categories: [{ name: CATEGORY_ENUM.ELECTRICAS }],
    images: [{ src: "/img/tools/02.png" }],
  },
  {
    slug: "Lijadora Orbital",
    name: "Lijadora Orbital",
    categories: [{ name: CATEGORY_ENUM.ELECTRICAS }],
    images: [{ src: "/img/tools/01.png" }],
  },
{
    slug: "Martillo de Carpintero",
    name: "Martillo de Carpintero",
    categories: [{ name: CATEGORY_ENUM.MANUALES }],
    images: [{ src: "/img/tools/02.png" }],
  },
  {
    slug: "Destornillador de Precisión",
    name: "Destornillador de Precisión",
    categories: [{ name: CATEGORY_ENUM.MANUALES }],
    images: [{ src: "/img/tools/03.png" }],
  },
  {
    slug: "Alicate Universal",
    name: "Alicate Universal",
    categories: [{ name: CATEGORY_ENUM.MANUALES }],
    images: [{ src: "/img/tools/04.png" }],
  },
  {
    slug: "Llave Ajustable",
    name: "Llave Ajustable",
    categories: [{ name: CATEGORY_ENUM.MANUALES }],
    images: [{ src: "/img/tools/05.png" }],
  },
  // JARDINERÍA
  {
    slug: "Pala de jardín",
    name: "Pala de jardín",
    categories: [{ name: CATEGORY_ENUM.JARDINERIA }],
    images: [{ src: "/img/tools/01.png" }],
  },
  {
    slug: "Rastrillo de hojas",
    name: "Rastrillo de hojas",
    categories: [{ name: CATEGORY_ENUM.JARDINERIA }],
    images: [{ src: "/img/tools/02.png" }],
  },
  {
    slug: "Tijeras de podar",
    name: "Tijeras de podar",
    categories: [{ name: CATEGORY_ENUM.JARDINERIA }],
    images: [{ src: "/img/tools/03.png" }],
  },
  {
    slug: "Manguera extensible",
    name: "Manguera extensible",
    categories: [{ name: CATEGORY_ENUM.JARDINERIA }],
    images: [{ src: "/img/tools/04.png" }],
  },
  {
    slug: "Aspersor de jardín",
    name: "Aspersor de jardín",
    categories: [{ name: CATEGORY_ENUM.JARDINERIA }],
    images: [{ src: "/img/tools/05.png" }],
  },
  {
    slug: "Rociador manual",
    name: "Rociador manual",
    categories: [{ name: CATEGORY_ENUM.JARDINERIA }],
    images: [{ src: "/img/tools/01.png" }],
  },

  //CATEGORY_ENUM.MEDICION
  {
    slug: "Cinta métrica de 30m",
    name: "Cinta métrica de 30m",
    categories: [{ name: CATEGORY_ENUM.MEDICION }],
    images: [{ src: "/img/tools/05.png" }],
  },
  {
    slug: "Calibrador Vernier",
    name: "Calibrador Vernier",
    categories: [{ name: CATEGORY_ENUM.MEDICION }],
    images: [{ src: "/img/tools/02.png" }],
  },
  {
    slug: "Nivel láser autonivelante",
    name: "Nivel láser autonivelante",
    categories: [{ name: CATEGORY_ENUM.MEDICION }],
    images: [{ src: "/img/tools/04.png" }],
  },
  {
    slug: "Termómetro infrarrojo",
    name: "Termómetro infrarrojo",
    categories: [{ name: CATEGORY_ENUM.MEDICION }],
    images: [{ src: "/img/tools/01.png" }],
  },
  {
    slug: "Medidor de humedad digital",
    name: "Medidor de humedad digital",
    categories: [{ name: CATEGORY_ENUM.MEDICION }],
    images: [{ src: "/img/tools/05.png" }],
  },
  {
    slug: "Distanciómetro láser",
    name: "Distanciómetro láser",
    categories: [{ name: CATEGORY_ENUM.MEDICION }],
    images: [{ src: "/img/tools/01.png" }],
  },
  {
    slug: "Micrómetro de exteriores",
    name: "Micrómetro de exteriores",
    categories: [{ name: CATEGORY_ENUM.MEDICION }],
    images: [{ src: "/img/tools/02.png" }],
  },
  {
    slug: "Multímetro digital",
    name: "Multímetro digital",
    categories: [{ name: CATEGORY_ENUM.MEDICION }],
    images: [{ src: "/img/tools/03.png" }],
  },
  {
    slug: "Transportador de ángulos",
    name: "Transportador de ángulos",
    categories: [{ name: CATEGORY_ENUM.MEDICION }],
    images: [{ src: "/img/tools/04.png" }],
  },
  {
    slug: "Manómetro digital",
    name: "Manómetro digital",
    categories: [{ name: CATEGORY_ENUM.MEDICION }],
    images: [{ src: "/img/tools/05.png" }],
  },
  {
    slug: "Cronómetro digital",
    name: "Cronómetro digital",
    categories: [{ name: CATEGORY_ENUM.MEDICION }],
    images: [{ src: "/img/tools/01.png" }],
  },
  {
    slug: "Medidor de ángulo digital",
    name: "Medidor de ángulo digital",
    categories: [{ name: CATEGORY_ENUM.MEDICION }],
    images: [{ src: "/img/tools/02.png" }],
  },
  {
    slug: "Medidor de espesores",
    name: "Medidor de espesores",
    categories: [{ name: CATEGORY_ENUM.MEDICION }],
    images: [{ src: "/img/tools/03.png" }],
  },
  {
    slug: "Odómetro manual",
    name: "Odómetro manual",
    categories: [{ name: CATEGORY_ENUM.MEDICION }],
    images: [{ src: "/img/tools/04.png" }],
  },
  {
    slug: "Medidor de niveles de sonido",
    name: "Medidor de niveles de sonido",
    categories: [{ name: CATEGORY_ENUM.MEDICION }],
    images: [{ src: "/img/tools/05.png" }],
  },
  {
    slug: "Anemómetro digital",
    name: "Anemómetro digital",
    categories: [{ name: CATEGORY_ENUM.MEDICION }],
    images: [{ src: "/img/tools/01.png" }],
  },
  {
    slug: "Medidor de distancia ultrasónico",
    name: "Medidor de distancia ultrasónico",
    categories: [{ name: CATEGORY_ENUM.MEDICION }],
    images: [{ src: "/img/tools/02.png" }],
  },
  {
    slug: "Calibrador de espesores",
    name: "Calibrador de espesores",
    categories: [{ name: CATEGORY_ENUM.MEDICION }],
    images: [{ src: "/img/tools/03.png" }],
  },
  {
    slug: "Reloj comparador",
    name: "Reloj comparador",
    categories: [{ name: CATEGORY_ENUM.MEDICION }],
    images: [{ src: "/img/tools/04.png" }],
  },
  {
    slug: "Medidor de luz",
    name: "Medidor de luz",
    categories: [{ name: CATEGORY_ENUM.MEDICION }],
    images: [{ src: "/img/tools/05.png" }],
  },

  // CONSTRUCCIÓN
  {
    slug: "Nivel de burbuja",
    name: "Nivel de burbuja",
    categories: [{ name: CATEGORY_ENUM.CONSTRUCCION }],
    images: [{ src: "/img/tools/01.png" }],
  },
  {
    slug: "Pala de punta cuadrada",
    name: "Pala de punta cuadrada",
    categories: [{ name: CATEGORY_ENUM.CONSTRUCCION }],
    images: [{ src: "/img/tools/02.png" }],
  },
  {
    slug: "Carretilla de construcción",
    name: "Carretilla de construcción",
    categories: [{ name: CATEGORY_ENUM.CONSTRUCCION }],
    images: [{ src: "/img/tools/03.png" }],
  },
  {
    slug: "Cincel de albañil",
    name: "Cincel de albañil",
    categories: [{ name: CATEGORY_ENUM.CONSTRUCCION }],
    images: [{ src: "/img/tools/04.png" }],
  },
  {
    slug: "Escuadra de acero",
    name: "Escuadra de acero",
    categories: [{ name: CATEGORY_ENUM.CONSTRUCCION }],
    images: [{ src: "/img/tools/05.png" }],
  },
  {
    slug: "Nivel láser",
    name: "Nivel láser",
    categories: [{ name: CATEGORY_ENUM.CONSTRUCCION }],
    images: [{ src: "/img/tools/01.png" }],
  },
  {
    slug: "Corta ladrillos",
    name: "Corta ladrillos",
    categories: [{ name: CATEGORY_ENUM.CONSTRUCCION }],
    images: [{ src: "/img/tools/02.png" }],
  },
  {
    slug: "Espátula de construcción",
    name: "Espátula de construcción",
    categories: [{ name: CATEGORY_ENUM.CONSTRUCCION }],
    images: [{ src: "/img/tools/03.png" }],
  },
  {
    slug: "Regla de albañil",
    name: "Regla de albañil",
    categories: [{ name: CATEGORY_ENUM.CONSTRUCCION }],
    images: [{ src: "/img/tools/04.png" }],
  },
  {
    slug: "Pico de construcción",
    name: "Pico de construcción",
    categories: [{ name: CATEGORY_ENUM.CONSTRUCCION }],
    images: [{ src: "/img/tools/05.png" }],
  },
  {
    slug: "Mazo de albañil",
    name: "Mazo de albañil",
    categories: [{ name: CATEGORY_ENUM.CONSTRUCCION }],
    images: [{ src: "/img/tools/01.png" }],
  },
  {
    slug: "Llana dentada",
    name: "Llana dentada",
    categories: [{ name: CATEGORY_ENUM.CONSTRUCCION }],
    images: [{ src: "/img/tools/02.png" }],
  },
  {
    slug: "Talocha de esponja",
    name: "Talocha de esponja",
    categories: [{ name: CATEGORY_ENUM.CONSTRUCCION }],
    images: [{ src: "/img/tools/03.png" }],
  },
  {
    slug: "Cortador de cerámica",
    name: "Cortador de cerámica",
    categories: [{ name: CATEGORY_ENUM.CONSTRUCCION }],
    images: [{ src: "/img/tools/04.png" }],
  },
  {
    slug: "Cepillo de alambre",
    name: "Cepillo de alambre",
    categories: [{ name: CATEGORY_ENUM.CONSTRUCCION }],
    images: [{ src: "/img/tools/05.png" }],
  },
  {
    slug: "Alicate de albañil",
    name: "Alicate de albañil",
    categories: [{ name: CATEGORY_ENUM.CONSTRUCCION }],
    images: [{ src: "/img/tools/01.png" }],
  },
  {
    slug: "Cubeta para mezcla",
    name: "Cubeta para mezcla",
    categories: [{ name: CATEGORY_ENUM.CONSTRUCCION }],
    images: [{ src: "/img/tools/02.png" }],
  },
  {
    slug: "Cortadora de piedra",
    name: "Cortadora de piedra",
    categories: [{ name: CATEGORY_ENUM.CONSTRUCCION }],
    images: [{ src: "/img/tools/03.png" }],
  },
  {
    slug: "Rasqueta de albañil",
    name: "Rasqueta de albañil",
    categories: [{ name: CATEGORY_ENUM.CONSTRUCCION }],
    images: [{ src: "/img/tools/04.png" }],
  },
  {
    slug: "Cuerda de albañil",
    name: "Cuerda de albañil",
    categories: [{ name: CATEGORY_ENUM.CONSTRUCCION }],
    images: [{ src: "/img/tools/05.png" }],
  },
];