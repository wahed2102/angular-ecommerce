import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [],
})
export class ProductListComponent implements OnInit {
  productList: any;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
      this.productList.forEach((element: any) => {
        if (
          element.category === "women's clothing" ||
          element.category === "men's clothing"
        ) {
          element.category = 'fashion';
        }
        Object.assign(element, { quantity: 1, total: element.price });
      });
      // console.log('this.productList', this.productList);
    });
  }
}
