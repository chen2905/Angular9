import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { RxjsOfOperatorComponent } from './rxjs-of-operator/rxjs-of-operator.component';
import { RxjsFromOperatorComponent } from './rxjs-from-operator/rxjs-from-operator.component';
import { RxjsFromEventOperatorComponent } from './rxjs-from-event-operator/rxjs-from-event-operator.component';
import { RxjsIntervalOperatorComponent } from './rxjs-interval-operator/rxjs-interval-operator.component';
import { RxjsDebounceTimeOperatorComponent } from './rxjs-debounce-time-operator/rxjs-debounce-time-operator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxjsTakeTakeWhileOperatorComponent } from './rxjs-take-take-while-operator/rxjs-take-take-while-operator.component';
import { RxjsFirstLastElementAtOperatorComponent } from './rxjs-first-last-element-at-operator/rxjs-first-last-element-at-operator.component';
import { RxjsMinMaxOperatorComponent } from './rxjs-min-max-operator/rxjs-min-max-operator.component';
import { R1ConvertVariablesToObservableComponent } from './r1-convert-variables-to-observable/r1-convert-variables-to-observable.component';
import { R2CreateCustomObservableComponent } from './r2-create-custom-observable/r2-create-custom-observable.component';
import { R3FunctionVsObservableComponent } from './r3-function-vs-observable/r3-function-vs-observable.component';
import { R4CancelSubscriptionOfObserverableComponent } from './r4-cancel-subscription-of-observerable/r4-cancel-subscription-of-observerable.component';
import { R5OperatorsComponent } from './r5-operators/r5-operators.component';
import { R6BufferOperatorComponent } from './r6-buffer-operator/r6-buffer-operator.component';
import { R7TakeOperatorComponent } from './r7-take-operator/r7-take-operator.component';
import { R8SkipOperatorComponent } from './r8-skip-operator/r8-skip-operator.component';
import { R9DistinctOperatorComponent } from './r9-distinct-operator/r9-distinct-operator.component';
import { R10FilterOperatorComponent } from './r10-filter-operator/r10-filter-operator.component';
import { R11ExampleOperatorComponent } from './r11-example-operator/r11-example-operator.component';


@NgModule({
  declarations: [
    RxjsLearningComponent,
    RxjsOfOperatorComponent,
    RxjsFromOperatorComponent,
    RxjsFromEventOperatorComponent,
    RxjsIntervalOperatorComponent,
    RxjsDebounceTimeOperatorComponent,
    RxjsTakeTakeWhileOperatorComponent,
    RxjsFirstLastElementAtOperatorComponent,
    RxjsMinMaxOperatorComponent,
    R1ConvertVariablesToObservableComponent,
    R2CreateCustomObservableComponent,
    R3FunctionVsObservableComponent,
    R4CancelSubscriptionOfObserverableComponent,
    R5OperatorsComponent,
    R6BufferOperatorComponent,
    R7TakeOperatorComponent,
    R8SkipOperatorComponent,
    R9DistinctOperatorComponent,
    R10FilterOperatorComponent,
    R11ExampleOperatorComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RxjsModule { }
