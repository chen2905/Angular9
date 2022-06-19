import { Component, OnInit } from '@angular/core';
import { audit, interval, sample } from 'rxjs';

@Component({
  selector: 'app-r11-example-operator',
  templateUrl: './r11-example-operator.component.html',
  styleUrls: ['./r11-example-operator.component.css']
})
export class R11ExampleOperatorComponent implements OnInit {

  constructor() { }
  numberSet:number[]=[]
  ngOnInit(): void {
  }
  onExampleClick(){
    interval(500).pipe(

      sample(interval(2000))
    ).subscribe(
      data=>this.numberSet.push(data),
      error=>console.log(error),
      ()=>console.log("sample interval is completed")
    )
  }

  onAuditClick(){

    interval(1000).pipe(
      audit(value=>interval(2000))
    ).subscribe(
      data=>this.numberSet.push(data),
      error=>console.log(error),
      ()=>console.log("audit interval is completed")
    )
  }
}
