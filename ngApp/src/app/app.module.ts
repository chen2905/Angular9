import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';

import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { AttributeBindingComponent } from './components/attribute-binding/attribute-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { BuildInPipeComponent } from './components/build-in-pipe/build-in-pipe.component';
import { HighlightPipe } from './pipes/highlight.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ParameterizedRouteComponent } from './components/parameterized-route/parameterized-route.component';
import { QueryParameterRouteComponent } from './components/query-parameter-route/query-parameter-route.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { ObservableComponent } from './components/observable/observable.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgForComponent,
    NgStyleComponent,
    NgClassComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    AttributeBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    BuildInPipeComponent,
    HighlightPipe,
    ParameterizedRouteComponent,
    QueryParameterRouteComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    AdminHomeComponent,
    ObservableComponent,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [

// {provide:LocationStrategy,useClass:HashLocationStrategy}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
