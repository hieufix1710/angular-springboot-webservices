import { Component, OnInit } from '@angular/core';
import {LoadCssService} from '../../service/load-css.service';

@Component({
  selector: 'app-community-goods',
  templateUrl: './community-goods.component.html',
  styleUrls: ['./community-goods.component.css']
})
export class CommunityGoodsComponent implements OnInit {

  constructor(private  loadingService: LoadCssService) { }

  ngOnInit(): void {
    this.loadingService.loadCss('src/assets/css/style.css');
    this.loadingService.loadScript('assets/js/sidebar-menu.js')
  }

}
