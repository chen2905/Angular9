import { Component, OnInit } from '@angular/core';
import { filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-r5-operators',
  templateUrl: './r5-operators.component.html',
  styleUrls: ['./r5-operators.component.css'],
})
export class R5OperatorsComponent implements OnInit {
  subscribeDisplay: string = 'even number';
  pipeDisplay: string = 'odd number';
  exampleObservable$ = interval(1000); //created operator
  constructor() {}

  ngOnInit(): void {
    this.exampleObservable$.subscribe((data) => {
      if (data % 2 == 0) {
        this.subscribeDisplay += data + ',';
      }
    });

    this.exampleObservable$.pipe(
      filter(number=>{
        return number%2!=0
      }),

      map((number:any)=>{
        return number +','
      })
    ).subscribe(data=>
      this.pipeDisplay+= data)
  }
}
