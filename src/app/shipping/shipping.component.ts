import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styles: [],
})
export class ShippingComponent implements OnInit {
  constructor(private cartService: CartService) {}

  emptyCart() {
    this.cartService.removeAllCart();
  }

  ngOnInit(): void {}
}
