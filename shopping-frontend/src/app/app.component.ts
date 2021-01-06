import { Component } from '@angular/core';
import {TokenStorageService} from './service/token-storage.service';
import {AccountService} from './service/account.service';
import {UserService} from './service/user.service';
import {LoadCssService} from './service/load-css.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dndelivery';
  constructor(private loadingService: LoadCssService) {
  }
  ngOnInit() {
    this.loadingService.loadScript('assets/js/home-v2.js');
    this.loadingService.loadCss('assets/css/style.css');
    this.loadingService.loadScript('assets/js/user-board.js');
  }
}
