import { Component, OnInit } from '@angular/core';
import { asapScheduler, asyncScheduler, merge, of, queueScheduler } from 'rxjs';

@Component({
  selector: 'app-r19-scheduler-operator',
  templateUrl: './r19-scheduler-operator.component.html',
  styleUrls: ['./r19-scheduler-operator.component.css']
})
export class R19SchedulerOperatorComponent implements OnInit {
  errorMessage1: string | undefined;
  completeMessage1: string | undefined;
  fromSet1: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  outputSet1: any[] = [];

  errorMessage2: string | undefined;
  completeMessage2: string | undefined;
  fromSet2: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  outputSet2: any[] = [];

  constructor() { }

  ngOnInit(): void {


  }
useScheduler(){
  let queueScheduler$=of('q1','q2',queueScheduler)
  let asyncScheduler$ = of('async1','async2',asyncScheduler)
  let asapScheduler$ =of('asap1','asap2',asapScheduler)

  merge(asyncScheduler$,queueScheduler$,asapScheduler$)
  .subscribe(
    (data) => {
      this.outputSet1.push('observer 1 reciving: ' + data);
    },
    (err) => (this.errorMessage1 = err),
    () => (this.completeMessage1 = 'observer 1 complete')
  );
}
}
