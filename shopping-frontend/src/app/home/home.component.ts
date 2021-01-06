import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../service/token-storage.service';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {LoadCssService} from '../service/load-css.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageUser: string;
  loginUser: string;
  username: string;

  constructor(private tokenStorageService: TokenStorageService,
              private userService: UserService,
              private router: Router,
              private loadingService: LoadCssService
              ) { }

  ngOnInit(): void {
    this.loadingService.loadCss('assets/css/style.css');
    this.loadingService.loadScript('assets/js/user-board.js');
    this.username = this.tokenStorageService.getUsername();
    if (this.username!=null){
      this.userService.getUser(this.username).subscribe(
        (data) => {
          this.loginUser = data.name;
          this.imageUser = data.avatar
        }
      )
    }

  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('/')

  }
}


