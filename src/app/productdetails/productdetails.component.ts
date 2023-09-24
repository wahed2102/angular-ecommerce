import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styles: [],
})
export class ProductdetailsComponent {
  product: any;
  quantity: number = 1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private cartService: CartService
  ) {
    let productid = this.route.snapshot.params['productid'];
    let url = 'https://fakestoreapi.com/products/' + productid;
    this.http.get(url).subscribe(
      (response: any) => {
        this.product = response;
      },
      (error) => {
        console.log('Error from product details api', error);
      }
    );
  }

  addToCart() {}

  increaseDecrease(count: number) {
    if (this.quantity === 1 && count === -1) {
      this.quantity = 1;
    } else {
      this.quantity = this.quantity + count;
    }
  }
}
