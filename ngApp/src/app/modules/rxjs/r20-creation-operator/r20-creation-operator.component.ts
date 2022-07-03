import { Component, OnInit } from '@angular/core';
import { asyncScheduler, defer, generate, interval, of, range, timer } from 'rxjs';
import { GenerateOptions } from 'rxjs/internal/observable/generate';

@Component({
  selector: 'app-r20-creation-operator',
  templateUrl: './r20-creation-operator.component.html',
  styleUrls: ['./r20-creation-operator.component.css']
})
export class R20CreationOperatorComponent implements OnInit {
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
 useDefer(){
  let source$ =defer(()=>{
    if(Math.random()>0.5){
    return of('thanks','God','for','your','bless')
    }else{
      return of(1,2,3,4,5)
    }
  })

  source$.subscribe(
    (data) => {
      this.outputSet1.push('observer 1 reciving: ' + data);
    },
    (err) => (this.errorMessage1 = err),
    () => (this.completeMessage1 = 'observer 1 complete')
  );

  source$.subscribe(
    (data) => {
      this.outputSet2.push('observer 2 reciving: ' + data);
    },
    (err) => (this.errorMessage2 = err),
    () => (this.completeMessage2 = 'observer 2 complete')
  );



 }
 useRange(){
  let source$ =range(99,10)



  source$.subscribe(
    (data) => {
      this.outputSet2.push('observer 2 reciving: ' + data);
    },
    (err) => (this.errorMessage2 = err),
    () => (this.completeMessage2 = 'observer 2 complete')
  );
  }

useGenerate(){

  let generateCondition :GenerateOptions<string,number>={
    initialState:1,
    condition:(x)=>x<100,
    iterate:(x)=> x+1  ,
    resultSelector:(x)=>'Thanks God! '+x +' times',
    scheduler:asyncScheduler
  }
  let source$= generate(generateCondition);

  source$.subscribe(
    (data) => {
      this.outputSet1.push('observer 1 reciving: ' + data);
    },
    (err) => (this.errorMessage1 = err),
    () => (this.completeMessage1 = 'observer 1 complete')
  );

  source$.subscribe(
    (data) => {
      this.outputSet2.push('observer 2 reciving: ' + data);
    },
    (err) => (this.errorMessage2 = err),
    () => (this.completeMessage2 = 'observer 2 complete')
  );

}
useTimer(){
  let intervalSource$ = interval(2000)
  let timerSource$ = timer(1000,2000)



  intervalSource$.subscribe(
    (data) => {
      this.outputSet1.push('inserval emitting: ' + data);
    },
    (err) => (this.errorMessage1 = err),
    () => (this.completeMessage1 = 'observer 1 complete')
  );

  timerSource$.subscribe(
    (data) => {
      this.outputSet2.push('timer emitting: ' + data);
    },
    (err) => (this.errorMessage2 = err),
    () => (this.completeMessage2 = 'observer 2 complete')
  );

}



}
