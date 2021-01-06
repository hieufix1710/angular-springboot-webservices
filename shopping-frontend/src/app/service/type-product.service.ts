import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {TypeProduct} from '../model/TypeProduct';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../Global/global';

@Injectable({
  providedIn: 'root'
})
export class TypeProductService {
  private readonly API =  this.global.API+'typeProducts';
  private readonly API2 = this.global.API+'getByTypeId';

  constructor(private http: HttpClient, private global: Globals) { }
  getAll(): Observable<TypeProduct[]>{
    return this.http.get<TypeProduct[]>(this.API)
  }
  getQuantityByType(typeId): Observable<number>{
    return this.http.get<number>(this.API2+ '?type='+typeId)
  }
}
