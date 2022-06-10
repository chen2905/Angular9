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
    RxjsMinMaxOperatorComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RxjsModule { }
