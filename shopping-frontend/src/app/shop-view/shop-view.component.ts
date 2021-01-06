import {Component, OnInit} from '@angular/core';
import {LoadCssService} from '../service/load-css.service';
import {ProductService} from '../service/product.service';
import {Product} from '../model/Product';
import {ActivatedRoute} from '@angular/router';
import {TypeProduct} from '../model/TypeProduct';
import {TypeProductService} from '../service/type-product.service';
import {ToastrService} from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-shop-view',
  templateUrl: './shop-view.component.html',
  styleUrls: ['./shop-view.component.css']
})
export class ShopViewComponent implements OnInit {
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
              private typeProductService: TypeProductService,
              private toast: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.loadingService.loadCss('assets/css/style.css');
    this.loadingService.loadScript('assets/js/sidebar-menu.js');
    this.loadingService.loadScript('assets/js/user-board.js');
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
      if (cart !== null) {
        array = cart.split(',');
        for (let i = 0; i < array.length; i++) {
          let temp = parseInt(array[i]);
          if (!isNaN(temp)) {
            this.cart.push(parseInt(array[i]));
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  }


  changeStyleShow(number: number) {
    this.style = number;
    this.ngOnInit();
    changeAnimationStyle();
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

  search() {
    this.ngOnInit();
  }

  checkQuantity(typeId) {
    this.typeProductService.getQuantityByType(typeId).subscribe(
      (data) => {
        return data;
      }
    );
  }

  addToCart(id: number) {
    this.cart.push(id);
    window.sessionStorage.setItem('cart', this.cart.toString());
    this.toast.success('Manipulation success !', 'Add to cart')

  }


}

function changeAnimationStyle() {
  var selectors = document.getElementsByClassName('view-selector');
  console.log(selectors);
  for (let i = 0; i < selectors.length; i++) {
    selectors[i].addEventListener('click',function() {
      if (selectors[i].className.includes(' active')) {
        selectors[i].className.replace(" active", "");
      }else{
        selectors[i].className += " active";
      }
    })
  }

}


