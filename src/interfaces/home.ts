import { IIcon } from '@dathaplus/storybook/dist/interfaces/base/icon';
import { IHeroBanner } from '@interfaces/common/IHeroBanner';
import { ISection } from '@interfaces/common/ISection';
import { ICard } from '@interfaces/common/ICard';

export interface IHomeServerPage {
  heroBanner?: IHeroBannerHome;
  mission?: IMission;
  services?: IHomeServices[];
  trajectory?: ITrajectoryHomeSection;
  projects?: ISection[];
}

export interface IHeroBannerHome extends IHeroBanner {
  welcome?: string;
  bgImg?: string;
}

export interface IMission {
  title: string;
  description: string;
}

export interface IServicesHomeSection {
  mission?: IMission;
  carrousel?: IHomeServices[];
}
export interface ITrajectoryHomeSection {
  title?: string;
  description?: string;
  years?: string;
}

export interface IHomeServices {
  icon?: IIcon | string;
  title?: string;
  description?: string[];
}

export interface IServiceTestimonial {
  name: string;
  message: string;
}

export interface ICardProduct extends Omit<ICard, 'title'> {
  category: string;
  description: string;
}

export interface WCPagination {
  totalPages?: number;
  totalProducts?: number;
}


export type GetPromiseProductsResponse = {
  products:ICardProduct[] ;
  pagination: WCPagination;
}

export interface IHomeServicesProd {
  product: ICardServiceProd[];
  className?: {
    left?: string;
    right?: string;
  };
}

export interface ICardServiceProd {
  icon?: IIcon;
  title?: string;
  desc?: string;
}
