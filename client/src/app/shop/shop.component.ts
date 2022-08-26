import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: IProduct[];

  constructor(private shopService : ShopService) { }

  ngOnInit(): void {
    this.shopService.getProduct().subscribe({
      next: (response) => this.products = response.data,
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    }
      // response =>{ this.products = response.data},
      // error =>{ console.log(error)}   
    )
  }

}
