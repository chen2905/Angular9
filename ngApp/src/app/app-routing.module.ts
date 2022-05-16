import { NgStyle } from '@angular/common';
import { Interpolation } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeBindingComponent } from './components/attribute-binding/attribute-binding.component';
import { BuildInPipeComponent } from './components/build-in-pipe/build-in-pipe.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { ParameterizedRouteComponent } from './components/parameterized-route/parameterized-route.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { QueryParameterRouteComponent } from './components/query-parameter-route/query-parameter-route.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminGuardGuard } from './admin-guard.guard';

const routes: Routes = [
{path:'',component:HomeComponent,pathMatch:'full'},
{path:'attribute-binding',component:AttributeBindingComponent},
{path:'build-in-pipe',component:BuildInPipeComponent},
{path:'event-binding',component:EventBindingComponent},
{path:'interpolation',component:Interpolation},
{path:'ng-class',component:NgClassComponent},
{path:'ng-for',component:NgForComponent},
{path:'ng-style',component:NgStyle},
{path:'property-binding',component:PropertyBindingComponent},
{path:'two-way-data-binding',component:TwoWayDataBindingComponent},
{path:'parameterized-route/:id/:name',component:ParameterizedRouteComponent},
{path:'query-parameter-route',component:QueryParameterRouteComponent},
{path:'products', component:ProductListComponent},
{path:'products',children:[
  {path:'add',component:ProductAddComponent},
  {path:'edit/:id',component:ProductEditComponent},
]},
{ path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },

{path:'admin', component:AdminHomeComponent,canActivate:[AdminGuardGuard]},
{ path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
{path:'**',component:PageNotFoundComponent}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
