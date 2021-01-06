import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor() { }

  holdParamSearch(value){
    return value;
  }
}
