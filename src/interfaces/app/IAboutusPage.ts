import { IHeroBanner } from '@interfaces/common/IHeroBanner';
import { ISection } from '@interfaces/common/ISection';
import { ISolutionsCenter } from '@interfaces/common/ISolutionsCenter';
import {IIcon} from "@dathaplus/storybook/dist/interfaces/base/icon";

export interface IAboutusPage extends IKnowus {
  heroBanner?: IHeroBanner;
  solutionsCenter?: ISolutionsCenter;
  knowUs?: IKnowus;
  ourCommitment?: IOurCommitment;
  carouselAboutus?: IGoalsAboutus[];
}


export interface IKnowus {
  subtitleKnowUs?: string;
  descriptionKnowUs?: string;
}

export interface IGoalsAboutus {
  icon: IIcon;
  title: string;
  description: string;
  information: string;
}

export interface IOurCommitment extends Omit<ISection, 'subtitle' | 'title'> {}
