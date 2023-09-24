import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItemList: any = [];
  productList = new BehaviorSubject<any>([]);

  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    let itemExists = this.cartItemList.find(
      (item: any) => item.id === product.id
    );
    if (itemExists) {
      this.cartItemList.forEach((item: any) => {
        if (item.id === product.id) {
          item.quantity++;
          item.total = Number(item.total) + Number(product.price);
          item.total = Number(item.total).toFixed(2);
        }
      });
    } else {
      this.cartItemList.push(product);
    }
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    // console.log(this.cartItemList);
  }

  removeFromCart(product: any) {
    let quantity = this.cartItemList.find(
      (item: any) => item.id === product.id
    ).quantity;
    if (quantity > 1) {
      this.cartItemList.forEach((item: any) => {
        if (item.id === product.id) {
          item.quantity--;
          item.total = Number(item.total) - Number(product.price);
          item.total = Number(item.total).toFixed(2);
        }
      });
    } else {
      this.removeCartItem(product);
    }
  }

  getTotalPrice(): number {
    let grandTotal = 0;

    this.cartItemList.map((a: any) => (grandTotal += Number(a.total)));

    grandTotal = Number(grandTotal.toFixed(2));

    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
