import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateProductComponent } from './create-product/create-product.component';
import { ProductsComponent } from './products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },

  {path: '',
  component: ProductsComponent,
  children: [
      {
         path: 'view-all',
         component: ViewAllProductsComponent
      },
      {
         path: 'create',
         component: CreateProductComponent
      },
      {
        path: 'view',
        component: ViewProductComponent
     },

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
