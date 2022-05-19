import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';

import { UsersComponent } from './users.component';

const routes: Routes = [{ path: '', component: UsersComponent },
{ path: 'login', component: LoginComponent },

{ path: 'checkout', component: CheckoutComponent },


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
