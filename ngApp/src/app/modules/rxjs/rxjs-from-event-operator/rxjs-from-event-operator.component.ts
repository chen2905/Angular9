import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-from-event-operator',
  templateUrl: './rxjs-from-event-operator.component.html',
  styleUrls: ['./rxjs-from-event-operator.component.css']
})
export class RxjsFromEventOperatorComponent implements OnInit {
  @ViewChild('btnObservable')
  btnObservable:ElementRef|undefined
  btnObservableDisplay:any|undefined
  constructor() { }


  ngOnInit(): void {

  }
  getFromEventObservable(){
    const btnObservable$=fromEvent(this.btnObservable?.nativeElement,'click')
    btnObservable$.subscribe(data=>{
      this.btnObservableDisplay ="data:"+JSON.stringify(data)

    })
  }

  log(val:any) { return console.log(val); }
}
