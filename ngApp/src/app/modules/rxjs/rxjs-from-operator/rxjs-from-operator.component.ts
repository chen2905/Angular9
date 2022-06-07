import { Component, OnInit } from '@angular/core';
import { Observable, of,from } from 'rxjs';

@Component({
  selector: 'app-rxjs-from-operator',
  templateUrl: './rxjs-from-operator.component.html',
  styleUrls: ['./rxjs-from-operator.component.css']
})
export class RxjsFromOperatorComponent implements OnInit {

  constructor() { }

  prayString ='Thank you! Mighty God'
  prayString$:Observable<string> = from(this.prayString)
  prayStringDisplay :string |undefined

  prayArray=['Thank','You', 'Mighty', 'God']
  prayArray$:Observable<string> = from(this.prayArray);
  prayArrayDisplay:string|undefined;



 prayObjectArray=[
   {id:1,pray:"Thank"},

   {id:2,pray:"You"},

   {id:3,pray:"Mighty"},

   {id:4,pray:"God"}
 ]

 prayOjectArray$ :Observable<any> = from ( this.prayObjectArray)
 prayObjectArrayDisplay:any

  ngOnInit(): void {

    this.prayString$.subscribe(data=>{
      this.prayStringDisplay = data
    })

    this.prayArray$.subscribe(data=>{
      this.prayArrayDisplay = data
    })



    this.prayOjectArray$.subscribe(data=>{
     // this.prayOjectArrayDisplay$ = JSON.stringify(data)
     this.prayObjectArrayDisplay = data
     console.log(JSON.stringify(data))
    })

  }

}
