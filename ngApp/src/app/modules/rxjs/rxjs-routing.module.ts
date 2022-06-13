import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { R1ConvertVariablesToObservableComponent } from './r1-convert-variables-to-observable/r1-convert-variables-to-observable.component';
import { R2CreateCustomObservableComponent } from './r2-create-custom-observable/r2-create-custom-observable.component';
import { R3FunctionVsObservableComponent } from './r3-function-vs-observable/r3-function-vs-observable.component';
import { R4CancelSubscriptionOfObserverableComponent } from './r4-cancel-subscription-of-observerable/r4-cancel-subscription-of-observerable.component';
import { RxjsDebounceTimeOperatorComponent } from './rxjs-debounce-time-operator/rxjs-debounce-time-operator.component';
import { RxjsFirstLastElementAtOperatorComponent } from './rxjs-first-last-element-at-operator/rxjs-first-last-element-at-operator.component';
import { RxjsFromEventOperatorComponent } from './rxjs-from-event-operator/rxjs-from-event-operator.component';
import { RxjsFromOperatorComponent } from './rxjs-from-operator/rxjs-from-operator.component';
import { RxjsIntervalOperatorComponent } from './rxjs-interval-operator/rxjs-interval-operator.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { RxjsMinMaxOperatorComponent } from './rxjs-min-max-operator/rxjs-min-max-operator.component';
import { RxjsOfOperatorComponent } from './rxjs-of-operator/rxjs-of-operator.component';
import { RxjsTakeTakeWhileOperatorComponent } from './rxjs-take-take-while-operator/rxjs-take-take-while-operator.component';

const routes: Routes = [
  {path:'convert-variables-to-observable',component:R1ConvertVariablesToObservableComponent},
  {path:'create-custom-observable',component:R2CreateCustomObservableComponent},
  {path:'function-vs-observable',component:R3FunctionVsObservableComponent},
  {path:'cancel-subscription-of-observable',component:R4CancelSubscriptionOfObserverableComponent},
  {path:'learning',component:RxjsLearningComponent},
  {path:'of-operator',component:RxjsOfOperatorComponent},
  {path:'from-operator',component:RxjsFromOperatorComponent},
  {path:'fromEvent-operator',component:RxjsFromEventOperatorComponent},
  {path:'interval-operator',component:RxjsIntervalOperatorComponent},
  {path:'debounce-time-operator', component:RxjsDebounceTimeOperatorComponent},
  {path:'take-takeWhile-operator', component:RxjsTakeTakeWhileOperatorComponent},
  {path:'first-last-elementAt-operator', component:RxjsFirstLastElementAtOperatorComponent},
  {path:'min-max-operator', component:RxjsMinMaxOperatorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
