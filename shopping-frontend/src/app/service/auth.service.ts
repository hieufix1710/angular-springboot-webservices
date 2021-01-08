import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtResponse} from '../model/JwtResponse';
import {Globals} from '../Global/global';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'})
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private global: Globals) { }
  attemptAuth(account): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.global.API + "login", account, httpOptions);
  }
}
