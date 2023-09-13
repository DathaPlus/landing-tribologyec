import { ICardServiceProd, IHomeServices, IHomeServicesProd } from '@interfaces/home';
import { IIcon } from '@dathaplus/storybook/dist/interfaces/base/icon';

export const allServices = (
  {
    className,
  }: {
    className?: IHomeServicesProd['className'];
  },
  services: IHomeServices[] = [],
): IHomeServicesProd[] => {
  let products: ICardServiceProd[] = [];
  const gridProducts: IHomeServicesProd[] = [];

  services.forEach((ele, index: number) => {
    products.push({
      ...ele,
      icon: {
        name: ele.icon,
        size: 30,
        svg: {
          stroke: '#fff',
        },
      } as IIcon,
    });

    if (products.length === 4) {
      gridProducts.push({ product: products, className });
      products = [];
    }

    if (index === services.length - 1) gridProducts.push({ product: products, className });
  });

  return gridProducts;
};
