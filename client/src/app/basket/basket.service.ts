import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBasket } from '../shared/models/basket';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl = environment.apiUrl;
  private basketSource = new BehaviorSubject<IBasket>(null!);
  basket$ = this.basketSource.asObservable();

  constructor( private http: HttpClient) { }

  getBasket (id: string){
    return this.http.get<IBasket>(this.baseUrl+ 'basket?id=' + id)
    .pipe(
      map((basket : IBasket) =>{
        this.basketSource.next(basket);
      })
    );
  }
  setBasket (basket : IBasket){
    return this.http.post<IBasket>(this.baseUrl+ 'basket', basket)
    .subscribe({
        next: (response : IBasket) => this.basketSource.next(response),
        error: (e) => console.log(e)
        // ,complete: () => console.info('complete') 
    });
  }
  getCurrentBasketValue(){
    return this.basketSource.value;
  }

}
