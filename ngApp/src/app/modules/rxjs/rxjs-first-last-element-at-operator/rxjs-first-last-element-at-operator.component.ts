import { Component, OnInit } from '@angular/core';
import { distinct, elementAt, first, from, last, Observable, of, skip } from 'rxjs';

@Component({
  selector: 'app-rxjs-first-last-element-at-operator',
  templateUrl: './rxjs-first-last-element-at-operator.component.html',
  styleUrls: ['./rxjs-first-last-element-at-operator.component.css']
})
export class RxjsFirstLastElementAtOperatorComponent implements OnInit {


  prayArray =['Thank','You','Thank','You','Mighty','God'];
  prayArray$:Observable<string>=from(this.prayArray)
  prayArrayOf$:Observable<string[]>=of(this.prayArray)
  firstWord:string|undefined;
  lastWord:string|undefined;
  wordAt:string |undefined;
  distinctWords:any|undefined
  constructor() { }

  ngOnInit(): void {
  }
getFirstWord(){
  this.prayArray$.pipe(first()).subscribe(data=>{
    this.firstWord=data
  })
}
getLastWord(){
  this.prayArray$.pipe(last()).subscribe (data=>{
    this.lastWord= data
  })
}
getWordAt(){
  this.prayArray$.pipe(elementAt(2)).subscribe(data=>{
    this.wordAt=data
  })
}
getDistinct(){
  this.prayArray$.pipe(distinct(),skip(2)).subscribe(data=>{
    console.log(data)



  })
}

}
