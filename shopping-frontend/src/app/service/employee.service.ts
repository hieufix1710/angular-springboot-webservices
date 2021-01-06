import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/Employee';
import {Globals} from '../Global/global';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private GET_ALL = this.global.API + 'employees';
  constructor(private http: HttpClient,private global: Globals) { }
  getAll(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.GET_ALL); }
}
