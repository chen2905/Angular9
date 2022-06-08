import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { RxjsOfOperatorComponent } from './rxjs-of-operator/rxjs-of-operator.component';
import { RxjsFromOperatorComponent } from './rxjs-from-operator/rxjs-from-operator.component';
import { RxjsFromEventOperatorComponent } from './rxjs-from-event-operator/rxjs-from-event-operator.component';
import { RxjsIntervalOperatorComponent } from './rxjs-interval-operator/rxjs-interval-operator.component';


@NgModule({
  declarations: [
    RxjsLearningComponent,
    RxjsOfOperatorComponent,
    RxjsFromOperatorComponent,
    RxjsFromEventOperatorComponent,
    RxjsIntervalOperatorComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
