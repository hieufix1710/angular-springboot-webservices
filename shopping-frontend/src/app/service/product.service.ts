import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/Product';
import {Globals} from '../Global/global';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API = this.global.API +'products/';
  private readonly API_GET_BY_ID = this.global.API +'product/';
  private readonly API2 = this.global.API +'products';
  private readonly API3 = this.global.API +'productIndex';
  private readonly API4 = this.global.API +'goods/';
  private readonly API5 = this.global.API +'totalEntities';
  private readonly API_ADD_NEW = this.global.API +'addNew';

  constructor(private http: HttpClient, private global: Globals) {
  }

  getProducts(pageNum: number, pageSize: number, priceFlow: number, productType: number, search: string[]): Observable<Product[]> {
    return this.http.post<Product[]>(this.API +
      pageNum + '?pageSize=' + pageSize + '&priceFlow=' + priceFlow + '&typeProduct=' + productType, search);
  }

  getAllEntities(type: number, search: string[]): Observable<number> {
    return this.http.post<number>(this.API3 + '?typeProduct=' + type, search);
  }

  getGoods(currentPage: number, pageSize: number, priceFlow: number, searchValue: string, typeProductId: number):
    Observable<Product[]> {
    return this.http.get<Product[]>(this.API4 + currentPage + '?pageSize=' + pageSize +
      '&priceFlow=' + priceFlow + '&search=' + searchValue + '&typeProductId=' + typeProductId);
  }

  getTotalEntities(priceFlow, search, typeProductId): Observable<number> {
    return this.http.get<number>(this.API5 + '?priceFlow=' + priceFlow +
      '&search=' + search + '&typeProductId=' + typeProductId);
  }

  addNewProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.API_ADD_NEW, product);
  }

  getProduct(idProduct: string): Observable<Product> {
    return this.http.get<Product>(this.API_GET_BY_ID + idProduct);
  }
}
