import { Injectable } from '@angular/core';
import {TokenStorageService} from './token-storage.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private tokenStorageService: TokenStorageService) { }
}
