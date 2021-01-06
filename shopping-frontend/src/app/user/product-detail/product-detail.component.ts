import { Component, OnInit } from '@angular/core';
import {LoadCssService} from '../../service/load-css.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  idProduct: string;
  product: Product;
  constructor(private loadingService: LoadCssService,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService

  ) { }

  ngOnInit(): void {
    this.loadingService.loadCss('assets/css/style.css');
    this.activatedRoute.paramMap.subscribe(
      (param: ParamMap) => {
        this.idProduct = (param.get('id'));
        this.productService.getProduct(this.idProduct).subscribe(
          (product) =>{
            this.product = product;
          }
        )
      }
    )

  }

}
