import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface ICommentCard {
  images: {
    desktop: StaticImport | string;
    mobile: StaticImport | string;
  };
  title: string;
  shortDescription: string;
  redirection?: string;
}
