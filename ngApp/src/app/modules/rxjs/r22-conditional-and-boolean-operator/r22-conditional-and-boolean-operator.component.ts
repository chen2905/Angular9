import { Component, OnInit } from '@angular/core';
import {
  count,
  every,
  find,
  findIndex,
  first,
  interval,
  isEmpty,
  of,
  take,
} from 'rxjs';

@Component({
  selector: 'app-r22-conditional-and-boolean-operator',
  templateUrl: './r22-conditional-and-boolean-operator.component.html',
  styleUrls: ['./r22-conditional-and-boolean-operator.component.css'],
})
export class R22ConditionalAndBooleanOperatorComponent implements OnInit {
  constructor() {}
  errorMessage1: string | undefined;
  completeMessage1: string | undefined;
  fromSet1: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  outputSet1: any[] = [];

  errorMessage2: string | undefined;
  completeMessage2: string | undefined;
  fromSet2: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  outputSet2: any[] = [];
  ngOnInit(): void {}
  useIsEmpty() {
    let source$ = interval(500);

    source$.pipe(take(5), isEmpty()).subscribe(
      (data) => {
        this.outputSet1.push('is empty?: ' + data);
      },
      (err) => (this.errorMessage1 = err),
      () => (this.completeMessage1 = 'observer 1 complete')
    );

    source$.pipe(take(5), count()).subscribe(
      (data) => {
        this.outputSet2.push('how many data emitted?: ' + data);
      },
      (err) => (this.errorMessage2 = err),
      () => (this.completeMessage2 = 'observer 2 complete')
    );
  }

  useFindIndex() {
    let source$ = of(1, 2, 35, 15, 45, 22);

    source$.pipe(findIndex((value) => value % 5 == 0)).subscribe(
      (data) => {
        this.outputSet1.push(
          ' in 1,2,35,15,45,22 first Item index can be divided by 5 is: ' + data
        );
      },
      (err) => (this.errorMessage1 = err),
      () => (this.completeMessage1 = 'observer 1 complete')
    );
    source$.pipe(find((value) => value % 5 == 0)).subscribe(
      (data) => {
        this.outputSet2.push(
          'in 1,2,35,15,45,22, first Item value can be divided by 5 is: ' + data
        );
      },
      (err) => (this.errorMessage2 = err),
      () => (this.completeMessage2 = 'observer 2 complete')
    );
  }

  useEvery(){
    let source$ = of (5,10,10,15,23);

    source$.pipe(every((value) => value % 5 == 0)).subscribe(
      (data) => {
        this.outputSet1.push(
          ' in 5,10,10,15,23 can be divided by 5 is: ' + data
        );
      },
      (err) => (this.errorMessage1 = err),
      () => (this.completeMessage1 = 'observer 1 complete')
    );
  }
}
