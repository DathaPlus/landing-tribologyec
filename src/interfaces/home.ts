import { IIcon } from '@dathaplus/storybook/dist/interfaces/base/icon';

import { ILink } from './link';

export interface IHomeServerPage {
  heroBanner?: IHeroBannerHome;
  mission?: IMission;
  services?: IHomeServices[];
  trajectory?: ITrajectoryHomeSection;
  projects?: object;
}

export interface IHeroBannerHome {
  title?: string;
  subtitle?: string;
  welcome?: string;
  description?: string;
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

export interface ICardProject {
  img?: string;
  title?: string;
  description?: string;
  link?: ILink;
}

export interface ICardProduct extends Omit<ICardProject, 'title'> {
  category: string;
  description: string;
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
