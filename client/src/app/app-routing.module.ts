import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:'', component: HomeComponent,
    data:{
      breakcrumb:{
        label: 'app home',
        info: 'home'
      }
    }
  },
  {path:'test-error', component: TestErrorComponent, data:{breakcrumb: 'Test Errors'}},
  {path:'server-error', component: ServerErrorComponent, data:{breakcrumb: 'Server Errors'}},
  {path:'not-found', component: NotFoundComponent, data:{breakcrumb: 'Not Found'}},
  {path: 'shop', loadChildren:()=>import('./shop/shop.module').then(mod=>mod.ShopModule),data:{breakcrumb: 'Shop'}},
  {path:'**',redirectTo:'not-found', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
