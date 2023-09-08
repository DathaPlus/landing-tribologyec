export interface IContactPage extends IContactAssessor {
  heroBanner?: {
    title?: string;
  };
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
