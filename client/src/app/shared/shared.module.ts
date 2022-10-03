import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PaperComponent } from './components/paper/paper.component'
import {CarouselModule } from 'ngx-bootstrap/carousel';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component'


@NgModule({
  declarations: [
    PagingHeaderComponent,
    PaperComponent,
    OrderTotalsComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PaperComponent,
    CarouselModule,
    OrderTotalsComponent
  ]
})
export class SharedModule { }
