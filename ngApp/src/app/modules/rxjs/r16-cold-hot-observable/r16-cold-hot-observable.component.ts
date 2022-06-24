import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, observable, Subject } from 'rxjs';

@Component({
  selector: 'app-r16-cold-hot-observable',
  templateUrl: './r16-cold-hot-observable.component.html',
  styleUrls: ['./r16-cold-hot-observable.component.css']
})



export class R16ColdHotObservableComponent implements OnInit {
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
  onColdObservable(){
    this.outputSet1=[]
    this.outputSet2=[]
    let observerable$ = new Observable(
      (observer)=>{
        observer.next(Math.random())
      }

    )

    observerable$.subscribe(
     (data)=>{
      this.outputSet1?.push(data)},
      error=>{this.errorMessage1 =error},
      ()=>this.completeMessage1 = "observer1 complete"
    );


    observerable$.subscribe(
      (data)=>{
       this.outputSet2?.push(data)},
       error=>{this.errorMessage2 =error},
       ()=>this.completeMessage2 = "observer2 complete"
     );

  }


  onHotObservable(){
    this.outputSet1=[]
    this.outputSet2=[]

    let randomNumber = Math.random()
    let observerable$ = new Observable(
      (observer)=>{
        observer.next(randomNumber)
        console.log(randomNumber)
      }

    )

    observerable$.subscribe(
     (data)=>{
      this.outputSet1?.push(data)},
      error=>{this.errorMessage1 =error},
      ()=>this.completeMessage1 = "observer1 complete"
    );
    observerable$.subscribe(
      (data)=>{
       this.outputSet2?.push(data)},
       error=>{this.errorMessage2 =error},
       ()=>this.completeMessage2 = "observer2 complete"
     );

  }


  onHotEventObservable(){




    let eventObserverable$ =  fromEvent(document,'click')

    eventObserverable$.subscribe(

     (data :Event)=>{
      this.outputSet1=[];
      this.outputSet1?.push(
        (data as PointerEvent).clientX + ', ' +  (data as PointerEvent).clientY
        )

      },
      error=>{this.errorMessage1 =error},
      ()=>this.completeMessage1 = "observer1 complete"
    );
    eventObserverable$.subscribe(
      (data :Event)=>{
        this.outputSet2=[]
        this.outputSet2?.push(
          (data as PointerEvent).clientX + ', ' +  (data as PointerEvent).clientY
          )

        },
       error=>{this.errorMessage2 =error},
       ()=>this.completeMessage2 = "observer2 complete"
     );

  }


  onSubjectHotObservable(){

    let interval$= interval(1000)
    let subject$ = new Subject();

    interval$.subscribe(subject$)
    this.outputSet1=[];
    this.outputSet2=[];

    subject$.subscribe(
      (data)=>{
        this.outputSet1?.push(data)},
        error=>{this.errorMessage1 =error},
        ()=>this.completeMessage1 = "observer1 complete"

    )

    setTimeout(() => {
      subject$.subscribe(
        (data)=>{
          this.outputSet2?.push(data)},
          error=>{this.errorMessage2 =error},
          ()=>this.completeMessage2 = "observer2 complete"

      )
    }, 2000);



  }
}
