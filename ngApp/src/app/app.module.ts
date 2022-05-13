import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { BuildInPipeComponent } from './build-in-pipe/build-in-pipe.component';
import { HighlightPipe } from './pipes/highlight.pipe';



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
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
