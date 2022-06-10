import { Component, OnInit } from '@angular/core';
import { distinct, filter, from, max, min, Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-min-max-operator',
  templateUrl: './rxjs-min-max-operator.component.html',
  styleUrls: ['./rxjs-min-max-operator.component.css']
})
export class RxjsMinMaxOperatorComponent implements OnInit {

  constructor() { }
  numberArray=[1,3,2,1,1,3,8,9,10,8,8]
  minNumber:any
  maxNumber:any
  numberArray$:Observable<number> = from(this.numberArray)

  ngOnInit(): void {
    this.numberArray$.pipe(
      distinct(),
      filter(v=>this.lessThan(v,8)),
      min()
    ).subscribe(
      data=>this.minNumber=data
    )

    this.numberArray$.pipe(
      distinct(),
      filter(v=>this.lessThan(v,8)),
      max()
    ).subscribe(
      data=>this.maxNumber=data
    )

  }
  lessThan(iValue:number,iMax:number){
    return iValue<iMax? true:false
  }
}
