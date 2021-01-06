import {TypeProduct} from './TypeProduct';
import {User} from './User';

export class Product {
  id: number;
  name: string;
  price: number;
  url: string;
  quantity: number;
  saleOff: number;
  tradeMark: number;
  typeProduct: TypeProduct;
  dateUpload: string;
  view: number;
  commentAmount: number;
  downloadAmount: number;
  followed: number;
  user: User;
  deleted: boolean;
  description: string;
}
