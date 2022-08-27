import { Component, OnInit } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/productType';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: IProduct[];
  brands: IBrand[];
  types : IType[];
  brandIdselected=0;
  typeIdSelected=0;

  constructor(private shopService : ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
    
  }

  getProducts(){
    this.shopService.getProducts(this.brandIdselected, this.typeIdSelected).subscribe(
      {
        next: (response) => this.products = response!.data,
        error: (e) => console.error(e),
        complete: () => console.info('Add products complete') 
      }
        // response =>{ this.products = response.data},
      // error =>{ console.log(error)}  
    )
  }
      

  getBrands(){
    this.shopService.getBrands().subscribe(
      {
        next: (response) => this.brands = [{id:0, name: 'All'}, ...response],
        error: (e) => console.error(e),
        complete: () => console.info('Add brands complete') 
      }
    )
  }

  getTypes(){
    this.shopService.getTypes().subscribe(
      {
        next: (response) => this.types = [{id:0, name: 'All'}, ...response],
        error: (e) => console.error(e),
        complete: () => console.info('Add Types complete') 
      }
    )
  }

  onBrandSelected(brandId:number){
    this.brandIdselected = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId:number){
    this.typeIdSelected = typeId;
    this.getProducts();
  }

}
