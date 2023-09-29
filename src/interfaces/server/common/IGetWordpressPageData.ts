export interface IGetWordpressPageDataParams {
  searchParams?: {
    namePage?: string;
  };
}

export interface IWordpressPageData<ACF = object> {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  acf: ACF;
}
