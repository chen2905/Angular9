import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { interval, materialize, take, toArray } from 'rxjs';


@Component({
  selector: 'app-r23-utility-operator',
  templateUrl: './r23-utility-operator.component.html',
  styleUrls: ['./r23-utility-operator.component.css']
})
export class R23UtilityOperatorComponent implements OnInit {
  constructor() {}
  errorMessage1: string | undefined;
  completeMessage1: string | undefined;
  fromSet1: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  outputSet1: any[] = [];

  errorMessage2: string | undefined;
  completeMessage2: string | undefined;
  fromSet2: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  outputSet2: any[] = [];


  ngOnInit(): void {
}

  useToArray(){
    let source$ =interval(500)
    source$.pipe(take(5)).subscribe(
      (data) => {
        this.outputSet1.push('normal observable' + data);
      },
      (err) => (this.errorMessage1 = err),
      () => (this.completeMessage1 = 'observer 1 complete')
    );

    source$.pipe(take(5), toArray()).subscribe(
      (data) => {
        this.outputSet2.push('array of observale ' + data);
      },
      (err) => (this.errorMessage2 = err),
      () => (this.completeMessage2 = 'observer 2 complete')
    );
  }
  useMaterialize(){
    let source$ =interval(500)
    source$.pipe(take(5)).subscribe(
      (data) => {
        this.outputSet1.push('normal observable' + data);
      },
      (err) => (this.errorMessage1 = err),
      () => (this.completeMessage1 = 'observer 1 complete')
    );

    source$.pipe(take(5), materialize()).subscribe(
      (data) => {
        this.outputSet2.push('materialized oberservable objects value ' + data.value + ' has value:' +data.hasValue);
      },
      (err) => (this.errorMessage2 = err),
      () => (this.completeMessage2 = 'observer 2 complete')
    );
  }

}
