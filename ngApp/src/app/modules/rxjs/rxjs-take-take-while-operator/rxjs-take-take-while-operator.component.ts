import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { fromEvent, Observable,debounceTime,take,takeWhile,of, from,takeLast } from 'rxjs';

@Component({
  selector: 'app-rxjs-take-take-while-operator',
  templateUrl: './rxjs-take-take-while-operator.component.html',
  styleUrls: ['./rxjs-take-take-while-operator.component.css']
})
export class RxjsTakeTakeWhileOperatorComponent implements OnInit {

  rxjsForm:FormGroup

  constructor(private fb:FormBuilder) { this.rxjsForm = this.fb.group({
    txtTake:[''],
    txtTakeWhile:[''],
  }) }

  prayArray:string[]=['Thank','You','Mighty','God'];
  prayArray$:Observable<string>=from(this.prayArray)

  txtTakeLastDisplay:any
  txtTakeDisplay:any


  txtTakeWhileDisplay:any

  ngOnInit(): void {


    this.rxjsForm.get('txtTake')?.valueChanges
    .pipe(
      take(2),
      debounceTime(2000))
    .subscribe(data =>{this.txtTakeDisplay=data});

    this.prayArray$
    .pipe(
      takeLast(3)
    ).subscribe(
      data=>{
        this.txtTakeLastDisplay = JSON.stringify(data)
        console.log(data)
      }

    )



   this.rxjsForm.get('txtTakeWhile')?.valueChanges
   .pipe(
     takeWhile(input=>this.shorterThan(input,5)),
     debounceTime(2000))
    .subscribe(data =>{this.txtTakeWhileDisplay=data});
  }
shorterThan(iInput:string, ilength:number){
  return iInput.length<ilength?true:false
}
}
