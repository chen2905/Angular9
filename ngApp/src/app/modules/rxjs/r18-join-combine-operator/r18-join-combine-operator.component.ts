import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, take } from 'rxjs';

@Component({
  selector: 'app-r18-join-combine-operator',
  templateUrl: './r18-join-combine-operator.component.html',
  styleUrls: ['./r18-join-combine-operator.component.css']
})
export class R18JoinCombineOperatorComponent implements OnInit {
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
  useCombineLatest(){ 
    let source1$= interval(1000).pipe(take(5))
    let source2$= interval(2000).pipe(take(5))
    combineLatest([source1$,source2$]).subscribe(
      (data) => {
        this.outputSet1.push('observer 1 reciving: ' +data);
      },
      (err) => (this.errorMessage1 = err),
      () => (this.completeMessage1 = 'observer 1 complete')

    )


  }
}
