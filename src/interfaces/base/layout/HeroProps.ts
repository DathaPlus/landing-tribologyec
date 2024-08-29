import { IHero } from "./IHero";


export interface HeroProps extends IHero {
    title?: string;
    description?: string;
  }
  