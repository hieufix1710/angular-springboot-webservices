import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../model/User';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_USER ='http://localhost:8080/users';
  constructor(private http: HttpClient) { }
  getUser(username):Observable<User> {
    return this.http.get<User>(this.API_USER + '?userName=' + username)
  }

}
