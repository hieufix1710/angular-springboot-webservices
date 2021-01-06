import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../model/Product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeFirstService {
  constructor(private http: HttpClient) { }
 
}
