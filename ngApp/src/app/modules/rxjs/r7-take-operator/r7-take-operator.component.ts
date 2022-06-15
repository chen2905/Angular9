import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, take, takeLast, takeUntil, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-r7-take-operator',
  templateUrl: './r7-take-operator.component.html',
  styleUrls: ['./r7-take-operator.component.css']
})
export class R7TakeOperatorComponent implements OnInit,AfterViewInit {

  onTakeUntilEvent : Observable<Event>|undefined


  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
      this.onTakeUntilEvent=fromEvent(document.getElementById('btnTakeUntil')!,'click')
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

  onTakeLast(){
   interval(500)
   .pipe(take(15),takeLast(3),tap((data)=>'last 3 data'+data))
   .subscribe((data)=>{
    console.log(data)
   })
  }
  onStartInterval(){
    interval(500)
    .pipe(takeUntil(this.onTakeUntilEvent!))
    .subscribe(
      data =>{
        console.log(data)
      },
      error=>{
        console.log(error)
      },
      ()=>console.log('takeuntil complete')
    )
  }

  onTakeWhile(){
    interval(500).pipe(
      takeWhile((x)=>x<3)
    ).subscribe(data=>{
      console.log(data)
    },
    error=>{
      console.log(error)
    },
    ()=>console.log('takeWhile complete')
    )
  }

}
