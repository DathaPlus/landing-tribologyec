import { IIcon } from '@dathaplus/storybook/dist/interfaces/base/icon';

import { ILink } from './link';

export interface IHomeData {
  heroBanner: IHeroBannerHome;
  ourServices: IServicesHomeSection;
  trayectory: ITrajectoryHomeSection;
}

export interface IHeroBannerHome {
  title?: string;
  subtitle?: string;
  welcome?: string;
  description?: string;
}

export interface IServicesHomeSection {
  mision?: {
    title: string;
    description: string;
  };
  carrousel?: IHomeServices[];
}

export interface ITrajectoryHomeSection {
  title?: string;
  description?: string;
  years?: string;
}

export interface IHomeServices {
  icon?: IIcon;
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
