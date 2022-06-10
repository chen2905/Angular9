import { Component, OnInit } from '@angular/core';
import { count, from, interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-interval-operator',
  templateUrl: './rxjs-interval-operator.component.html',
  styleUrls: ['./rxjs-interval-operator.component.css']
})
export class RxjsIntervalOperatorComponent implements OnInit {

  constructor() { }
  prayArray=['Thank','You', 'Mighty','God']
  prayArray$:Observable<string>=from(this.prayArray);
  prayWordDisplay:string|undefined
  wordCount :any
  ngOnInit(): void {

    const interval$ = interval(2000)

    interval$.subscribe(data=>{
      if(data<5){
        this.prayWordDisplay=this.prayArray[data]
      }
    })


    this.prayArray$.pipe(count()).subscribe(data=>{
      this.wordCount =data

    })
  }





}
