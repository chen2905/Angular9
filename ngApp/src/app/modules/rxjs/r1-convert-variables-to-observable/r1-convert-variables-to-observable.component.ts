import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-r1-convert-variables-to-observable',
  templateUrl: './r1-convert-variables-to-observable.component.html',
  styleUrls: ['./r1-convert-variables-to-observable.component.css']
})
export class R1ConvertVariablesToObservableComponent implements OnInit {


  bookArray = [
    {title:"Bible",description:"Great book of God"},
    {title:"Team of rivary",description:"A book about Lincoln, the greatest president"},
    {title:"One hundred years of solitude ",description:"Book about human's solitude"},
  ]
  bookArray$=from(this.bookArray)

  promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Resolve the promise, sending data');
    },3000)
  });

  promise$ = from(this.promise);



  constructor() { }

  ngOnInit(): void {
    fromEvent(document.getElementById('btnEvent')!,'click').subscribe(
      {
        next:data=>console.log(data),
        error:error=>console.log(error),
        complete:()=>console.log(' event$ complete')
      }
     )
  }
  convertArrayToObservable(){
    this.bookArray$.subscribe(
     {
       next:data=>console.log(data),
       error:error=>console.log(error),
       complete:()=>console.log('bookArray$ complete')
     }
    )
  }

  convertPromiseToObservable(){
    this.promise$.subscribe(
      {
        next:data=>console.log(data),
        error:error=>console.log(error),
        complete:()=>console.log(' promise$ complete')
      }
     )
  }
  convertDOMEventToObservable(){

  }

}
