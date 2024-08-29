import { IHeroBanner } from '@interfaces/common/IHeroBanner';

export interface IContactPage extends IContactAssessor {
  heroBanner?: IHeroBanner;
  assessor?: IContactAssessor;
  socialNetworks?: {
    title?: string;
    networks?: IContactNetworks[];
  };
}

export interface IContactAssessor {
  title?: string;
  subtitle?: string;
}

export interface IContactNetworks {
  icon?: string;
  title?: string;
  description?: string;
  redirection?: string;
}
