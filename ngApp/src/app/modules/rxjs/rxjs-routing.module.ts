import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { R13DebounceOperatorComponent } from 'src/app/modules/rxjs/r13-debounce-operator/r13-debounce-operator.component';
import { R1ConvertVariablesToObservableComponent } from './r1-convert-variables-to-observable/r1-convert-variables-to-observable.component';
import { R10FilterOperatorComponent } from './r10-filter-operator/r10-filter-operator.component';
import { R11SampleOperatorComponent } from './r11-sample-operator/r11-sample-operator.component';
import { R12FirstLastOperatorComponent } from './r12-first-last-operator/r12-first-last-operator.component';
import { R14MapOperatorComponent } from './r14-map-operator/r14-map-operator.component';
import { R15AjaxOperatorComponent } from './r15-ajax-operator/r15-ajax-operator.component';

import { R16ColdHotObservableComponent } from './r16-cold-hot-observable/r16-cold-hot-observable.component';
import { R16MulticastingWithSubjectComponent } from './r16-multicasting-with-subject/r16-multicasting-with-subject.component';
import { R17CatchErrorOperatorComponent } from './r17-catch-error-operator/r17-catch-error-operator.component';
import { R18JoinCombineOperatorComponent } from './r18-join-combine-operator/r18-join-combine-operator.component';
import { R19SchedulerOperatorComponent } from './r19-scheduler-operator/r19-scheduler-operator.component';

import { R2CreateCustomObservableComponent } from './r2-create-custom-observable/r2-create-custom-observable.component';
import { R20CreationOperatorComponent } from './r20-creation-operator/r20-creation-operator.component';
import { R21CounterOperationComponent } from './r21-counter-operation/r21-counter-operation.component';
import { R22ConditionalAndBooleanOperatorComponent } from './r22-conditional-and-boolean-operator/r22-conditional-and-boolean-operator.component';
import { R23UtilityOperatorComponent } from './r23-utility-operator/r23-utility-operator.component';
import { R3FunctionVsObservableComponent } from './r3-function-vs-observable/r3-function-vs-observable.component';
import { R4CancelSubscriptionOfObserverableComponent } from './r4-cancel-subscription-of-observerable/r4-cancel-subscription-of-observerable.component';
import { R5OperatorsComponent } from './r5-operators/r5-operators.component';
import { R6BufferOperatorComponent } from './r6-buffer-operator/r6-buffer-operator.component';
import { R7TakeOperatorComponent } from './r7-take-operator/r7-take-operator.component';
import { R8SkipOperatorComponent } from './r8-skip-operator/r8-skip-operator.component';
import { R9DistinctOperatorComponent } from './r9-distinct-operator/r9-distinct-operator.component';
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
  {path:'operator',component:R5OperatorsComponent},
  {path:'buffer-operator',component:R6BufferOperatorComponent},
  {path:'take-operator',component:R7TakeOperatorComponent},
  {path:'skip-operator',component:R8SkipOperatorComponent},
  {path:'distinct-operator',component:R9DistinctOperatorComponent},
  {path:'filter-operator',component:R10FilterOperatorComponent},
  {path:'sample-operator',component:R11SampleOperatorComponent},
  {path:'first-last-operator',component:R12FirstLastOperatorComponent},
  {path:'debounce-operator',component:R13DebounceOperatorComponent},
  {path:'map-operator',component:R14MapOperatorComponent},
  {path:'ajax-operator',component:R15AjaxOperatorComponent},
  {path:'subject',component:R16MulticastingWithSubjectComponent},
  {path:'cold-vs-hot-operator',component:R16ColdHotObservableComponent},
  {path:'catch-error-operator',component:R17CatchErrorOperatorComponent},
  {path:'join-combine-operator',component:R18JoinCombineOperatorComponent},
  {path:'scheduler-operator',component:R19SchedulerOperatorComponent},
  {path:'creation-operator',component:R20CreationOperatorComponent},
  {path:'count-operator',component:R21CounterOperationComponent},
  {path:'condition-boolean-operator',component:R22ConditionalAndBooleanOperatorComponent},

  {path:'utility-operator',component:R23UtilityOperatorComponent},

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
