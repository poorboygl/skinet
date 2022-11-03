import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'Skinet';

  constructor(private basketService: BasketService, private accountService: AccountService){}
  ngOnInit(): void {
    this.loadBasket();
    this.loadCurrentUser();
    
  }

  loadCurrentUser(){
    const token = localStorage.getItem('token');
    if(token){
      this.accountService.loadCurrentUser(token).subscribe({
        next: () => console.log('Loaded User'),
        error: (e) => console.log(e)
        // ,complete: () => console.info('complete') 
      });
    }
  }

  loadBasket(){
    const basketId = localStorage.getItem('basket_id');
    if(basketId){
      this.basketService.getBasket(basketId).subscribe({
        next: () => console.log('Initialised basket'),
        error: (e) => console.log(e), 
      });
    }
  }

}
