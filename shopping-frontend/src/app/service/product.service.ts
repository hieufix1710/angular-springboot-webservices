import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API = 'http://localhost:8080/products/';
  private readonly API_GET_BY_ID = 'http://localhost:8080/product/';
  private readonly API2 = 'http://localhost:8080/products';
  private readonly API3 = 'http://localhost:8080/productIndex';
  private readonly API4 = 'http://localhost:8080/goods/';
  private readonly API5 = 'http://localhost:8080/totalEntities';
  private readonly API_ADD_NEW = 'http://localhost:8080/addNew';

  constructor(private http: HttpClient) {
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
