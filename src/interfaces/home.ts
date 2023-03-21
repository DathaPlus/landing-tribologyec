import { IIcon } from '@dathaplus/storybook/dist/interfaces/base/icon';

import { ILink } from './link';

export interface IHomeServices {
  icon?: IIcon;
  title?: string;
  desc?: string;
}

export interface IServiceTestimonial {
  name: string;
  message: string;
}

export interface ICardProject {
  img?: string;
  title?: string;
  link?: ILink;
}

export interface ICardProduct extends Omit<ICardProject, 'title'> {
  category: string;
  description: string;
}
