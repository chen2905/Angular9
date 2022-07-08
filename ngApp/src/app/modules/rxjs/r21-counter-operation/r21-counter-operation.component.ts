import { Component, OnInit } from '@angular/core';
import { count, interval, max, min, of, reduce, take } from 'rxjs';

@Component({
  selector: 'app-r21-counter-operation',
  templateUrl: './r21-counter-operation.component.html',
  styleUrls: ['./r21-counter-operation.component.css']
})
export class R21CounterOperationComponent implements OnInit {
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
  useCounter(){
    let source$ = of(1,2,3,4,5,7,8,9,10,11,12);

    source$.pipe(count()).subscribe(
      (data) => {
        this.outputSet1.push('count of: ' + data);
      },
      (err) => (this.errorMessage1 = err),
      () => (this.completeMessage1 = 'observer 1 complete')
    );
    source$.pipe(count(value=>value>5)).subscribe(
      (data) => {
        this.outputSet2.push('count of data which greater than 5: ' + data);
      },
      (err) => (this.errorMessage2 = err),
      () => (this.completeMessage2= 'observer 2 complete')
    );
  }

  useMax(){
    let source$ = of(1,2,3,4,5,29,7,8,9,-31,11,12);

    source$.pipe(max()).subscribe(
      (data) => {
        this.outputSet1.push('max of number:1,2,3,4,5,29,7,8,9,-31,11,12 is  ' + data);
      },
      (err) => (this.errorMessage1 = err),
      () => (this.completeMessage1 = 'observer 1 complete')
    );
      let persons =[
        {name:'person1', age:60},
        {name:'person2', age:80},
        {name:'person3', age:40},

      ]
      let sourcePersons$ =of(...persons)


      sourcePersons$.pipe(max(
        (pre,cur)=>pre.age<cur.age ?-1:1)

        ).subscribe(
      (data) => {
        this.outputSet2.push('the oldest person is: ' + data.name + " the age is "+data.age);
      },
      (err) => (this.errorMessage2 = err),
      () => (this.completeMessage2= 'observer 2 complete')
    );

  }

  useMin(){
    let source$ = of(1,2,3,4,5,7,8,9,-31,11,12);

    source$.pipe(min()).subscribe(
      (data) => {
        this.outputSet1.push('min of number:1,2,3,4,5,7,8,9,-31,11,12 is ' + data);
      },
      (err) => (this.errorMessage1 = err),
      () => (this.completeMessage1 = 'observer 1 complete')
    );
      let persons =[
        {name:'person1', age:60},
        {name:'person2', age:80},
        {name:'person3', age:40},
        {name:'person4', age:10},
        {name:'person5', age:20},

      ]
      let sourcePersons$ =of(...persons)


      sourcePersons$.pipe(min(
        (pre,cur)=>pre.age<cur.age ?-1:1)

        ).subscribe(
      (data) => {
        this.outputSet2.push('the youngest person is: ' + data.name + " the age is "+data.age);
      },
      (err) => (this.errorMessage2 = err),
      () => (this.completeMessage2= 'observer 2 complete')
    );

  }

  useReduce(){
    let source$ = interval(5000)

    source$.pipe(
      take(5),
      reduce((acc,value)=>acc+=value))
      .subscribe(
        (data)=>{
          this.outputSet1.push('the reduce value of first 5 interval is: ' + data)
        },
        (err)=>{this.errorMessage1=err},
        ()=>this.completeMessage1="observer 1 complete"
      )
  }

}
