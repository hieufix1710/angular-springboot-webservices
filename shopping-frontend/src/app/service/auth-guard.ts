import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {TokenStorageService} from './token-storage.service';
// this class accept all account
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
//user
  constructor(private  tokenStorageService: TokenStorageService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = this.tokenStorageService.getToken();
    if (token == null) {
      this.router.navigateByUrl('/home');
      return false
    }
    return true;
  }
}
