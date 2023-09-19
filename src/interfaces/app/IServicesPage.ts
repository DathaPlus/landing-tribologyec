import { IHeroBanner } from '@interfaces/common/IHeroBanner';
import { ISection } from '@interfaces/common/ISection';
import { ICard } from '@interfaces/common/ICard';

export interface IServicesPage {
  heroBanner?: IHeroBanner;
  solutionsCenter?: ISolutionsCenter;
  ourServices?: ICard[];
  ourCommitment?: IOurCommitment;
}

export interface ISolutionsCenter extends ISection {
  buttonText?: string;
}

export interface IOurCommitment extends Omit<ISection, 'subtitle' | 'title'> {}

export interface IOurServices {
  services?: ICard[];
}
