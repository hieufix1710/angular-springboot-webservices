import {Product} from './Product';

export class Cart {
  constructor(product: Product, number: number) {
    this.product = product;
    this.quantity = number;
  }

  product: Product;
  quantity: number;
}
