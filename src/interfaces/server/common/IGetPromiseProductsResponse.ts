import { ICardProduct } from '@interfaces/home';
import { IWCPagination } from '@interfaces/server/common/IWCPagination';

export interface IGetPromiseProductsResponse {
  products: ICardProduct[];
  pagination: IWCPagination;
}
