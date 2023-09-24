import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [],
})
export class CartComponent implements OnInit {
  productsList: any;
  productsCombinedList: any;
  grandTotal: any;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getProducts().subscribe((res) => {
      this.productsList = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });

    console.log('productsList in Cart: ', this.productsList);
  }

  remove(product: any) {
    this.cartService.removeCartItem(product);
  }

  increase(product: any) {
    this.cartService.addToCart(product);
  }

  decrease(product: any) {
    this.cartService.removeFromCart(product);
  }
}
