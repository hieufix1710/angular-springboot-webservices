import {Component, OnInit} from '@angular/core';
import {Product} from '../model/Product';
import {ProductService} from '../service/product.service';
import {Cart} from '../model/Cart';

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
  carts: Cart[] = [];

  constructor(private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    try {
      const cart = window.sessionStorage.getItem('cart');
      let array = [];
      let numArr = [];
      if (cart !== null) {
        array = cart.split(',');
        for (let i = 0; i < array.length; i++) {
          let temp = (array[i]);
          if (!isNaN(temp)) {
            numArr.push(temp);      // this array have all number
          }
        }
      }
      let map = resolveArrToMap(numArr);
      for (let [key, value] of map.entries()) {
        this.productService.getProduct(key).subscribe(
          (product) => {
            this.carts.push(new Cart(product, value));
            this.totalPrice += product.price * value;
          },
          () => {
          },
          () => {
            this.cartTotal = this.totalPrice + this.shippingPrice;


          }
        );
      }


    } catch (e) {
      console.log(e);
    }


  }


  removeFromCart(cart: Cart) {
     const cartStr = window.sessionStorage.getItem('cart');
     let tempCartStr = removeElement(cartStr,cart.product.id);
     window.sessionStorage.removeItem('cart');
     this.carts = [];
     this.totalPrice = 0;
     this.cartTotal =0;
     window.sessionStorage.setItem('cart',tempCartStr);
     this.ngOnInit();
  }


}


function resolveArrToMap(array: number[]) {
  let set = new Set(array);
  let afterArr = Array.from(set);
  let map = new Map();
  for (let i = 0; i < afterArr.length; i++) {
    const temp = afterArr[i];
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (temp === array[j]) {
        count++;
      }
    }
    map.set(temp, count);
  }
  return map;
}


function removeElement(array, valueReplace) {
  let arrTemp = [];
  let numArr = [];
  if (array !== null) {
    arrTemp = array.split(',');
    for (let i = 0; i < arrTemp.length; i++) {
      let temp = (arrTemp[i]);
      if (!isNaN(temp)) {
        numArr.push(temp); // this array have all number
      }
    }
  }
  let resultArray = [];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i]!=valueReplace){
      resultArray.push(numArr[i])
    }
  }
  let str = '';
  for (let i = 0; i < resultArray.length; i++) {
      str+=resultArray[i]+','
  }
  let result = str.substring(0,str.length-1)
  return result ;

}








