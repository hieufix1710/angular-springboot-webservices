import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly API = 'http://localhost:8080/';
  private GET_ALL = this.API + 'employees';
  constructor(private http: HttpClient) { }
  getAll(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.GET_ALL); }
}
