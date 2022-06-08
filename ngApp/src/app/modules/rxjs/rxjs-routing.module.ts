import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsFromEventOperatorComponent } from './rxjs-from-event-operator/rxjs-from-event-operator.component';
import { RxjsFromOperatorComponent } from './rxjs-from-operator/rxjs-from-operator.component';
import { RxjsIntervalOperatorComponent } from './rxjs-interval-operator/rxjs-interval-operator.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { RxjsOfOperatorComponent } from './rxjs-of-operator/rxjs-of-operator.component';

const routes: Routes = [
  {path:'learning',component:RxjsLearningComponent},
  {path:'of-operator',component:RxjsOfOperatorComponent},
  {path:'from-operator',component:RxjsFromOperatorComponent},
  {path:'fromEvent-operator',component:RxjsFromEventOperatorComponent},
  {path:'interval-operator',component:RxjsIntervalOperatorComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
