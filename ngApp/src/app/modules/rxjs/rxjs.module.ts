import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { RxjsOfOperatorComponent } from './rxjs-of-operator/rxjs-of-operator.component';
import { RxjsFromOperatorComponent } from './rxjs-from-operator/rxjs-from-operator.component';


@NgModule({
  declarations: [
    RxjsLearningComponent,
    RxjsOfOperatorComponent,
    RxjsFromOperatorComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
