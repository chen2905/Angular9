import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsFromOperatorComponent } from './rxjs-from-operator/rxjs-from-operator.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { RxjsOfOperatorComponent } from './rxjs-of-operator/rxjs-of-operator.component';

const routes: Routes = [
  {path:'learning',component:RxjsLearningComponent},
  {path:'of-operator',component:RxjsOfOperatorComponent},
  {path:'from-operator',component:RxjsFromOperatorComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
