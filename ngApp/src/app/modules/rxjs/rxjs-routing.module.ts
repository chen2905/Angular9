import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsDebounceTimeOperatorComponent } from './rxjs-debounce-time-operator/rxjs-debounce-time-operator.component';
import { RxjsFromEventOperatorComponent } from './rxjs-from-event-operator/rxjs-from-event-operator.component';
import { RxjsFromOperatorComponent } from './rxjs-from-operator/rxjs-from-operator.component';
import { RxjsIntervalOperatorComponent } from './rxjs-interval-operator/rxjs-interval-operator.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { RxjsOfOperatorComponent } from './rxjs-of-operator/rxjs-of-operator.component';
import { RxjsTakeTakeWhileOperatorComponent } from './rxjs-take-take-while-operator/rxjs-take-take-while-operator.component';

const routes: Routes = [
  {path:'learning',component:RxjsLearningComponent},
  {path:'of-operator',component:RxjsOfOperatorComponent},
  {path:'from-operator',component:RxjsFromOperatorComponent},
  {path:'fromEvent-operator',component:RxjsFromEventOperatorComponent},
  {path:'interval-operator',component:RxjsIntervalOperatorComponent},
  {path:'debounce-time-operator', component:RxjsDebounceTimeOperatorComponent},
  {path:'take-takeWhile-operator', component:RxjsTakeTakeWhileOperatorComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
