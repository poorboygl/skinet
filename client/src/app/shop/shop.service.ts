import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IType } from '../shared/models/productType';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl='https://localhost:7126/Api/'

  constructor(private http: HttpClient) { }
  getProduct(){
    return this.http.get<IPagination>(this.baseUrl+'products?pageSize=50');
  }

  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl+'products/brands')
  }

  getTypes(){
    return this.http.get<IType[]>(this.baseUrl+'products/types')
  }

}
