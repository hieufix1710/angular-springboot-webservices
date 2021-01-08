import { Component, OnInit } from '@angular/core';
import {LoadCssService} from '../service/load-css.service';
import {HomeFirstService} from '../service/home-first.service';
import {Router} from '@angular/router';
import {ProductService} from '../service/product.service';
import {TokenStorageService} from '../service/token-storage.service';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-home-first',
  templateUrl: './home-first.component.html',
  styleUrls: ['./home-first.component.css']
})
export class HomeFirstComponent implements OnInit {
  search = '';
  cart: number[] = [];
  imageUser: string;
  loginUser: string;
  username: string;

  constructor(private loadingService: LoadCssService,
              private homeFirstService: HomeFirstService,
              private router : Router,
              private productService: ProductService,
              private tokenStorageService: TokenStorageService,
              private userService: UserService,

  ) { }

  ngOnInit(): void {
    this.loadingService.loadScript('assets/js/home-v2.js');
    this.loadingService.loadCss('assets/css/style.css');
    this.loadingService.loadScript('assets/js/user-board.js');
    try {
      const  cart = window.sessionStorage.getItem('cart');
      let array = [];
      if (cart!==null){
        array = cart.split(',');
        for (let i = 0; i < array.length; i++) {
          let temp = parseInt(array[i]);
          if (!isNaN(temp)){
            this.cart.push(parseInt(array[i]))
          }
        }
      }
    }catch (e) {
      console.log(e)
    }
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



  sendDataSearch() {

  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('/')

  }
}
