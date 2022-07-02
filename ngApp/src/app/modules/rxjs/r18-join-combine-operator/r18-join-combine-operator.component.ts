import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  combineLatest,
  concat,
  forkJoin,
  interval,
  map,
  merge,
  Observable,
  observable,
  of,
  partition,
  race,
  take,
  zip,
} from 'rxjs';

@Component({
  selector: 'app-r18-join-combine-operator',
  templateUrl: './r18-join-combine-operator.component.html',
  styleUrls: ['./r18-join-combine-operator.component.css'],
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


  constructor() {}

  ngOnInit(): void {}
  useCombineLatest() {
    let source1$ = interval(1000).pipe(take(5));
    let source2$ = interval(2000).pipe(take(5));
    combineLatest([source1$, source2$]).subscribe(
      (data) => {
        this.outputSet1.push('observer 1 reciving: ' + data);
      },
      (err) => (this.errorMessage1 = err),
      () => (this.completeMessage1 = 'observer 1 complete')
    );
  }
  useConcat() {
    let source1$ = new Observable((observer) => {
      observer.next('Thanks!');
      setTimeout(() => {}, 1000);

      observer.next('God');

      observer.next('for');

      observer.next('your');

      observer.next('blessing');

      observer.complete();
    });

    let source2$ = interval(1000);
    //let source2$ =of(1,2,3,4,5)
    concat(source1$, source2$).subscribe(
      (data) => {
        this.outputSet1.push('observer 1 reciving: ' + data);
      },
      (err) => (this.errorMessage1 = err),
      () => (this.completeMessage1 = 'observer 1 complete')
    );
  }
  useForkJoin() {
    let source1$ = new Observable((observer) => {
      observer.next('Thanks!');
      setTimeout(() => {}, 1000);
      observer.next('God');
      observer.complete();
    });

    // let source2$= interval(1000)


    let source2$ = of('God', 'Please Bless');

    let source3$ = of('please', 'bless', 'my', 'families,Thank you so much');
    forkJoin([source1$, source2$, source3$]).subscribe(
      (data) => {
        this.outputSet1.push('observer 1 reciving: ' + data);
      },
      (err) => (this.errorMessage1 = err),
      () => (this.completeMessage1 = 'observer 1 complete')
    );
  }
  useMerage() {
    let source1$ = new Observable((observer) => {
      observer.next('Thanks!');

      observer.next('God');
      observer.complete();
    });

    // let source2$= interval(1000)
    let source2$ = of('God', 'Please Bless');

    let source3$ = of('please', 'bless', 'my', 'families,Thank you so much');

    let source4$ = interval(2000);
    merge(source1$, source2$, source3$, source4$).subscribe(
      (data) => {
        this.outputSet1.push('observer 1 reciving: ' + data);
      },
      (err) => (this.errorMessage1 = err),
      () => (this.completeMessage1 = 'observer 1 complete')
    );
  }

  usePartition() {
    let source$ = of('God', 'Mighty', 'God', 'please', 'bless', 'us');

    let pSource$ = partition(source$, (value) => value == 'God');

    pSource$[0].subscribe(
      (data) => {
        this.outputSet1.push('observer 1 reciving: ' + data);
      },
      (err) => (this.errorMessage1 = err),
      () => (this.completeMessage1 = 'observer 1 complete')
    );
    pSource$[1].subscribe(
      (data) => {
        this.outputSet2.push('observer 2 reciving: ' + data);
      },
      (err) => (this.errorMessage2 = err),
      () => (this.completeMessage2 = 'observer 2 complete')
    );

  }
  useRace(){

    let source1$= new Observable()

    let source2$= new Observable()

    let source3$= new Observable()

     source1$= interval(1000).pipe(map(v=>"source1$ emitting:"+v))
     source2$= interval(900).pipe(map(v=>"source2$ emitting:"+v))
     source3$= interval(1000).pipe(map(v=>"source3$ emitting:"+v))
    this.outputSet1=[]
    this.outputSet2 =[]
    race([source1$,source2$,source3$]).subscribe(
      (data) => {
        this.outputSet1.push('observer 1 reciving: ' + data);
      },
      (err) => (this.errorMessage1 = err),
      () => (this.completeMessage1 = 'observer 1 complete')
    );

  }

  useZip(){
    let source1$= of('thanks1', 'god')

    let source2$= of('thanks2', 'god')

    let source3$= of('thanks3', 'god')

    zip(source1$,source2$,source3$).subscribe(
      (data) => {
        this.outputSet1.push('observer 1 reciving: ' + data);
      },
      (err) => (this.errorMessage1 = err),
      () => (this.completeMessage1 = 'observer 1 complete')
    );



  }


}
