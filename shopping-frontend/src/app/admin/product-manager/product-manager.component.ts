import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/Product';
import {ProductService} from '../../service/product.service';
import {TypeProduct} from '../../model/TypeProduct';
import {LoadCssService} from '../../service/load-css.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  products: Product[] = [];
  totalEntities = 0;
  currentPage = 1;
  pageSize = 6;
  totalPage = 0;
  priceFlow = 0;
  searchValue = '';
  typeProductId = 0;
  style = 1;
  turnOffBlockFilter = true;
  typeProducts: TypeProduct[] = [];
  quantity = 0;

  constructor(private productService: ProductService,
              private loadingService: LoadCssService
  ) {
  }

  ngOnInit(): void {
    this.productService.getTotalEntities(this.priceFlow,this.searchValue,this.typeProductId).subscribe(
      (data) => {
        this.totalEntities = data
        this.totalPage = Math.round(this.totalEntities/10)
      }
    );
    this.productService.getGoods(this.currentPage, this.pageSize, this.priceFlow, this.searchValue, this.typeProductId).subscribe(
      (data) => {
        this.products = data;
      }
    );

  }

  searcPrice() {
    this.ngOnInit();
  }

  search() {
    this.ngOnInit();
  }

  nextPage() {
    this.currentPage++;
    if (this.currentPage > this.totalPage) {
      this.currentPage = this.totalPage;
    }

    this.ngOnInit();
  }

  prePage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    } else {
      this.currentPage = 1;
    }
    this.ngOnInit();
  }
}
