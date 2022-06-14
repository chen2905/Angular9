import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-r7-take-operator',
  templateUrl: './r7-take-operator.component.html',
  styleUrls: ['./r7-take-operator.component.css']
})
export class R7TakeOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onTake(){
    interval(1000)
    .pipe(take(10))
    .subscribe((data)=>{
      console.log(data)
    },
    (error)=>{
      console.log(error)
    },
    ()=>{console.log("completed after first 10 emitted")}

    )
  }
}
