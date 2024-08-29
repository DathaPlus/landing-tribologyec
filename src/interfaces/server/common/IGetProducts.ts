export interface IGetProducts {
  next?: NextFetchRequestConfig;
  page?: number;
  perPage?: number;
  filter?: {
    category?: string;
  };
}
