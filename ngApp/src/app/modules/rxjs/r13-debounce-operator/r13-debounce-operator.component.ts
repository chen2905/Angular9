import { AfterViewInit, Component, OnInit } from '@angular/core';
import { debounce, elementAt, fromEvent, ignoreElements, interval, take } from 'rxjs';

@Component({
  selector: 'app-r13-debounce-operator',
  templateUrl: './r13-debounce-operator.component.html',
  styleUrls: ['./r13-debounce-operator.component.css']
})
export class R13DebounceOperatorComponent implements OnInit,AfterViewInit {
  errorMessage: string | undefined;
  completeMessage: string | undefined;
  fromNumberSet: number[] = [1, 2, 3, 4, 5, 6,7,8,9,10,11];
  outputNumberSet: number[] =[];


  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    let  buttonClickEvent =fromEvent(document.getElementById('btnDebounce')!,'click')

    buttonClickEvent.pipe(debounce(val=>interval(2000))).subscribe(
      (data)=>{
        this.completeMessage =''

        this.completeMessage ='emitting the click data :' + JSON.stringify(data)}
      ,
      error=>{this.errorMessage =error},
      ()=>this.completeMessage = "debounce operator complete"

    )
  }
  onDebounceInterval(){
    interval(1000).pipe(
      debounce(val=>interval(val*100))
    ).subscribe(
      (data)=>this.outputNumberSet?.push(data),
      error=>{this.errorMessage =error},
      ()=>this.completeMessage = "debounce operator complete"
    );
  }

  onElementAt(){
    interval(1000).pipe(
      elementAt(2,0)
    ).subscribe(
      (data)=>this.outputNumberSet?.push(data),
      error=>{this.errorMessage =error},
      ()=>this.completeMessage = "elementAt complete"
    );
  }

  onIgnoreElment(){

    interval(500).pipe(
     take(10),
    ignoreElements()
    ).subscribe(
      (data)=>{
        this.outputNumberSet?.push(data)
        console.log(data)
      },
      error=>{this.errorMessage =error},
      ()=>this.completeMessage = "ignoreElements complete"
    );

  }
}
