import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, fromEvent, interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-r6-buffer-operator',
  templateUrl: './r6-buffer-operator.component.html',
  styleUrls: ['./r6-buffer-operator.component.css']
})
export class R6BufferOperatorComponent implements OnInit,AfterViewInit {
  intervalData: number[]=[]
  intervalDataWithBufferCount: any[]=[]
  intervalDataWithBufferTime: any[]=[]
  showData$!:Observable<Event>
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.showData$ = fromEvent(document.getElementById('btnShowBufferredData')!,'click')
  }
  startInterval(){
    interval(1000).pipe(

      buffer(this.showData$)

    ).subscribe((data:number[])=>{
      console.log(data)
      this.intervalData.push(...data)
    })
  }
  startIntervalWithBufferCount(){
    interval(1000).pipe(
     bufferCount(3)
    ).subscribe((data:number[])=>{
      console.log(data)
      this.intervalDataWithBufferCount.push(...data)
    })
  }

  startIntervalWithBufferTime(){
    interval(1000).pipe(
      bufferTime(4000)
    ).subscribe((data:number[])=>{
      this.intervalDataWithBufferTime.push(...data)
    })
  }

  startIntervalWithBufferToggle(){
    let opening = interval(6000).pipe(
      tap(()=>console.log('buffer open')))

      let closing = ()=> interval(3000).pipe(
        tap(()=>console.log('buffer closed')))

        interval(1000)
        .pipe(bufferToggle(opening,closing))
        .subscribe(data=>console.log('bufferred data:'+ data))
  }
  startIntervalWithBufferWhen(){
    let x=0
    interval(500)
    .pipe(
     tap(i=>{x=i}),
    bufferWhen(
          ()=>{
            if(x<5)
            {
              return interval(1000)
            }
             return interval(2000)
          }

    )
    )
    .subscribe(data=>{
      console.log(data);
    })

  }

}
