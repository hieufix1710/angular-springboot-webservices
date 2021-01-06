import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {TypeProduct} from '../model/TypeProduct';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeProductService {
  private readonly API = 'http://localhost:8080/typeProducts';
  private readonly API2 = 'http://localhost:8080/getByTypeId';

  constructor(private http: HttpClient) { }
  getAll(): Observable<TypeProduct[]>{
    return this.http.get<TypeProduct[]>(this.API)
  }
  getQuantityByType(typeId): Observable<number>{
    return this.http.get<number>(this.API2+ '?type='+typeId)
  }
}
