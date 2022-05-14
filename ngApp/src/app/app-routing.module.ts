import { NgStyle } from '@angular/common';
import { Interpolation } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { BuildInPipeComponent } from './build-in-pipe/build-in-pipe.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';

const routes: Routes = [
{path:'attribute-binding',component:AttributeBindingComponent},
{path:'build-in-pipe',component:BuildInPipeComponent},
{path:'event-binding',component:EventBindingComponent},
{path:'interpolation',component:Interpolation},
{path:'ng-class',component:NgClassComponent},
{path:'ng-for',component:NgForComponent},
{path:'ng-style',component:NgStyle},
{path:'property-binding',component:PropertyBindingComponent},
{path:'two-way-data-binding',component:TwoWayDataBindingComponent},









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
