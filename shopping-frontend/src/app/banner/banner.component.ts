import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TypeProductService} from '../service/type-product.service';
import {TypeProduct} from '../model/TypeProduct';
import {Product} from '../model/Product';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  searchValue = new BehaviorSubject('');
  typeProductId = new BehaviorSubject(0);
  typeProducts: TypeProduct[] = [];
  products: Product[] = [];
  constructor(private typeProductService: TypeProductService) { }

  ngOnInit(): void {
    this.typeProductService.getAll().subscribe(
      (data) => {
        this.typeProducts = data;
      }
    )

  }

}
