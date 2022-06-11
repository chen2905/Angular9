import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { observableClass } from '../classes/observableClass';

@Component({
  selector: 'app-r2-create-custom-observable',
  templateUrl: './r2-create-custom-observable.component.html',
  styleUrls: ['./r2-create-custom-observable.component.css']
})
export class R2CreateCustomObservableComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  customObservable$ = new Observable<number>(observer=>{
for (let i=0;i<4;i++){

  if(i==3){
    observer.error("error:we reached 6")
  }
  observer.next(i);
}
  })

   observer = {
    next:(data:number)=>console.log('observer object'+data),
    error:(error:string)=>console.log(error),
    complete:()=>console.log(' observer object complete'),
  }

  onClick(){
    this.customObservable$.subscribe(this.observer);

    this.customObservable$.subscribe({next:(data:number)=>console.log('direct observer object'+data),
    error:(error:string)=>console.log(error),
    complete:()=>console.log(' observer object complete')});

    this.customObservable$.subscribe((data)=>console.log ('this is normally how we call observable'+ data),
    (error)=>{console.log("error")},
    ()=>{console.log(' observer object complete')}
    )

    this.customObservable$.subscribe(new observableClass());
  }
}
