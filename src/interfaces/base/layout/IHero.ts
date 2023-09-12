export interface IHero {
  title: string;
  image: string;
  subtitle?: string;
  style?: Omit<React.CSSProperties, 'backgroundImage'>;
}
