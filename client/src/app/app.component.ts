import { Component, OnInit } from '@angular/core';
import { IProduct } from './shared/models/product';
import {HttpClient} from '@angular/common/http'
import { IPagination } from './shared/models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  products : IProduct[];
  
  constructor(private http: HttpClient){}

  ngOnInit(): void {
  
    // this.http.get<IPagination>('https://localhost:7126/Api/Products?PageSize=50').subscribe(
    //  (res: IPagination) => {
      
    //    this.products = res.data;
    //   },
    //   error =>{
    //     console.log(error);
    //   });
    this.http.get<IPagination>('https://localhost:7126/Api/Products?PageSize=50').subscribe({
      next: (res: IPagination) => {
        this.products = res.data;
        console.log("DATA", this.products);
        console.log("Res", res);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }
}
