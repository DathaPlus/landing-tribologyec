import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface ICommentCard {
  image: {
    desktop: StaticImport | string;
    mobile: StaticImport | string;
  };
  title: string;
  description: string;
}
