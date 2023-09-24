import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  constructor(private cartService: CartService) {}

  total: number = 0;

  ngOnInit() {
    this.cartService
      .getProducts()
      .subscribe(
        (res) =>
          (this.total = res.reduce(
            (sum: any, item: any) => sum + item.quantity,
            0
          ))
      );
  }
}
