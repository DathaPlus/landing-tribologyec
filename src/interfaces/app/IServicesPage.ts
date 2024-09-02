import { IHeroBanner } from '@interfaces/common/IHeroBanner';
import { ISection } from '@interfaces/common/ISection';
import { ICard } from '@interfaces/common/ICard';
import { ISolutionsCenter } from '@interfaces/common/ISolutionsCenter';

export interface IServicesPage {
  heroBanner?: IHeroBanner;
  solutionsCenter?: ISolutionsCenter;
  ourServices?: ICard[];
  ourCommitment?: IOurCommitment;
}



export interface IOurCommitment extends Omit<ISection, 'subtitle' | 'title'> {}

export interface IOurServices {
  title?:string;
  subtitle?:string;
  services?: ICard[];
}
