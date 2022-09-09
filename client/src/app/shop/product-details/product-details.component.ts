import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;

  constructor(private shopService: ShopService, private activatedRoute:ActivatedRoute, private bcService: BreadcrumbService) { }

  ngOnInit(): void {
    this.loadProduct();
    
  }
  loadProduct(){
    let id = Number(this.activatedRoute.snapshot.paramMap.get("id"))
    this.shopService.getProduct(id).subscribe({
        next: (product) =>{
          this.product = product;
          this.bcService.set('@productDetails', product.name);
        } ,
        error: (e) => console.error(e)
      }
    )
  };

}
