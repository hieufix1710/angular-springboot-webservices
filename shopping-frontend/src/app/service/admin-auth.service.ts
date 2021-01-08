import { Injectable } from '@angular/core';
import {TokenStorageService} from './token-storage.service';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
// this class accept admin role
@Injectable({
  providedIn: 'root'
})
export class AdminAuthService implements CanActivate{

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const  token = this.tokenStorageService.getToken();
    const  tokenPayload = this.tokenStorageService.getAuthorities();
    if (token == null){
       this.router.navigateByUrl('/login');
       return false;
    }
    else if (!token ||
      tokenPayload !== expectedRole) {
      // not role admin
      this.router.navigateByUrl('/');
      confirm('You do not permission to Admin Page 403 Error !');
      return false;
    }
    return true;
  }

}
