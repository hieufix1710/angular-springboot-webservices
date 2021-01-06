import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/Product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TypeProduct} from '../../model/TypeProduct';
import {LoadCssService} from '../../service/load-css.service';
import {TypeProductService} from '../../service/type-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  totalEntities = 0;
  currentPage = 1;
  pageSize = 12;
  totalPage = 0;
  priceFlow = 0;
  searchValue = '';
  typeProductId = 0;
  style = 1;
  turnOffBlockFilter = true;
  typeProducts: TypeProduct[] = [];
  quantity = 0;
  cart: number[] = [];

  constructor(private loadingService: LoadCssService,
              private productService: ProductService,
              private activeRouter: ActivatedRoute,
              private typeProductService: TypeProductService
  ) {
  }

  ngOnInit(): void {
    this.loadingService.loadCss('src/assets/css/style.css');
    this.loadingService.loadScript('assets/js/sidebar-menu.js');
    this.productService.getTotalEntities(this.priceFlow, this.searchValue, this.typeProductId).subscribe(
      (data) => {
        this.totalEntities = data;
        this.totalPage = Math.round(this.totalEntities / this.pageSize);
      });
    this.productService.getGoods(this.currentPage,
      this.pageSize,
      this.priceFlow,
      this.searchValue,
      this.typeProductId,
    ).subscribe(
      (data) => {
        this.products = data;
      });

    this.typeProductService.getAll().subscribe(
      (data) => {
        this.typeProducts = data;
      }
    );
    try {
      const cart = window.sessionStorage.getItem('cart');
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
  }


  changeStyleShow(number: number) {
    this.style = number;
    this.ngOnInit();
  }

  changePriceFlow() {
    this.ngOnInit();
  }

  nextPage() {
    this.currentPage++;
    if (this.currentPage > this.totalPage) {
      --this.currentPage;
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

  changeFilterTypeProduct(number: number) {
    this.typeProductId = number;
    this.ngOnInit();
  }

  displayBlockFilter() {
    this.turnOffBlockFilter = true;
  }

  changeBlockFilter() {
    this.turnOffBlockFilter = false;
  }

  search() {
    this.ngOnInit();
  }

  checkQuantity(typeId){
    this.typeProductService.getQuantityByType(typeId).subscribe(
      (data) => {
        return data;
      }
    )
  }

  addToCart(id: number) {
    this.cart.push(id);
    window.sessionStorage.setItem('cart',this.cart.toString())
  }


}


