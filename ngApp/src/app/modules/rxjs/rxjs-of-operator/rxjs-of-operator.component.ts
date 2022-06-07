import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-of-operator',
  templateUrl: './rxjs-of-operator.component.html',
  styleUrls: ['./rxjs-of-operator.component.css']
})
export class RxjsOfOperatorComponent implements OnInit {

  constructor() { }

  prayArray=['Thank','You', 'Mighty', 'God']
  prayArrayObservable:Observable<string[]> = of (this.prayArray);
  prayArrayDisplay$:string[]|undefined;

  prayString ='Thank you! Mighty God'
  prayStringObservable:Observable<string> = of (this.prayString)
  prayStringDisplay$ :string |undefined

 prayObjectArray=[
   {id:1,pray:"Thank"},

   {id:2,pray:"You"},

   {id:3,pray:"Mighty"},

   {id:4,pray:"God"}
 ]

 prayOjectArrayObservable :Observable<any> = of ( this.prayObjectArray)
 prayOjectArrayDisplay$:any

  ngOnInit(): void {
    this.prayArrayObservable.subscribe(data=>{
      this.prayArrayDisplay$ = data
    })

    this.prayStringObservable.subscribe(data=>{
      this.prayStringDisplay$ = data
    })

    this.prayOjectArrayObservable.subscribe(data=>{
     // this.prayOjectArrayDisplay$ = JSON.stringify(data)
     this.prayOjectArrayDisplay$ = data
    })

  }

}
