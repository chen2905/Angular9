import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-rxjs-interval-operator',
  templateUrl: './rxjs-interval-operator.component.html',
  styleUrls: ['./rxjs-interval-operator.component.css']
})
export class RxjsIntervalOperatorComponent implements OnInit {

  constructor() { }
  prayArray=['Thank','You', 'Mighty','God']
  prayWordDisplay:string|undefined
  ngOnInit(): void {

    const interval$ = interval(2000)

    interval$.subscribe(data=>{
      if(data<5){
        this.prayWordDisplay=this.prayArray[data]
      }
    })
  }





}
