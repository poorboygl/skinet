import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PaperComponent } from './components/paper/paper.component'
import {CarouselModule } from 'ngx-bootstrap/carousel'


@NgModule({
  declarations: [
    PagingHeaderComponent,
    PaperComponent
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
    CarouselModule
  ]
})
export class SharedModule { }
