import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateProductComponent } from './create-product/create-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  {
    path: 'view-all',
    component: ViewAllProductsComponent,
  },
  {
    path: 'create',
    component: CreateProductComponent,
  },
  {
    path: 'view/:id',
    component: ViewProductComponent,
  },

  {
    path: 'update/:id',
    component: UpdateProductComponent,
  },
  {
    path: 'search/:id',
    component: ViewAllProductsByCategoryComponent,
  },
  {
    path: 'search-date',
    component: ViewAllProductsByDateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
