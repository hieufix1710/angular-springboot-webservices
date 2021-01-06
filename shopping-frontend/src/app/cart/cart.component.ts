import { Component, OnInit } from '@angular/core';
import {Product} from '../model/Product';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  totalPrice = 0;
  shippingPrice = 0;
  cartTotal = 0;
  amount = 0;

  constructor(private productService: ProductService,

              ) { }

  ngOnInit(): void {
    try {
      const cart = window.sessionStorage.getItem('cart');
      let array = [];
      if (cart!==null){
        array = cart.split(',');
        for (let i = 0; i < array.length; i++) {
          let temp = (array[i]);
          if (!isNaN(temp)){
            this.productService.getProduct(temp).subscribe(
              (product) => {
                this.totalPrice +=product.price;
                this.cart.push(product);
              }, () => {

              }, () => {
                this.cartTotal = this.totalPrice + this.shippingPrice;


              }
            )
          }
        }

      }


    }catch (e) {
      console.log(e)
    }
  }


  removeFromCart(id: number) {

  }
}

function countElement(array) {
  array.sort();

  var current = null;
  var cnt = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] != current) {
      if (cnt > 0) {
        document.write(current + ' comes --> ' + cnt + ' times<br>');
      }
      current = array[i];
      cnt = 1;
    } else {
      cnt++;
    }
  }
  if (cnt > 0) {
    document.write(current + ' comes --> ' + cnt + ' times');
  }
}
