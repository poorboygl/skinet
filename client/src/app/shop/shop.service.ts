import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl='https://localhost:7126/Api/'

  constructor(private http: HttpClient) { }
  getProduct(){
    return this.http.get<IPagination>(this.baseUrl+'products?pageSize=50');
  }
}
