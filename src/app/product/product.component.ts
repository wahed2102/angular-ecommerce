import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [],
})
export class ProductComponent {
  @Input() product: any;

  constructor(private cartService: CartService) {}

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
}
