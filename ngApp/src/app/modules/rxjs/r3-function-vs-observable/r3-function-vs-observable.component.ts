import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { functionExample, observableExample } from '../classes/functionVsObservable';

@Component({
  selector: 'app-r3-function-vs-observable',
  templateUrl: './r3-function-vs-observable.component.html',
  styleUrls: ['./r3-function-vs-observable.component.css']
})
export class R3FunctionVsObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClickFunction(){
    console.log('before calling function');
    console.log(functionExample())
    console.log(functionExample())
    console.log('after calls function')

  }

  onClickObservable(){
    console.log('before calling observable');
    observableExample.subscribe (data=>{
      console.log(data)
    })
    console.log('after calls observable')
  }
}
