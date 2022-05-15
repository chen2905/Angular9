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
{path:'parameterized-route/:id/:name',component:ParameterizedRouteComponent},
{path:'query-parameter-route',component:QueryParameterRouteComponent},








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
