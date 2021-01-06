import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../model/User';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../Global/global';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_USER = this.global.API+'users';
  constructor(private http: HttpClient, private global: Globals) { }
  getUser(username):Observable<User> {
    return this.http.get<User>(this.API_USER + '?userName=' + username)
  }

}
