import { Component, OnInit } from '@angular/core';
import { off } from 'process';
import {concatMap, exhaustMap, filter, interval, map, mergeMap,mergeMapTo,of, take } from 'rxjs';
import {ajax} from 'rxjs/ajax'

@Component({
  selector: 'app-r15-ajax-operator',
  templateUrl: './r15-ajax-operator.component.html',
  styleUrls: ['./r15-ajax-operator.component.css']
})
export class R15AjaxOperatorComponent implements OnInit {
  errorMessage: string | undefined;
  completeMessage: string | undefined;
  fromSet: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  outputSet: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  onCallAjax(){
    this.outputSet =[]
    ajax('https://jsonplaceholder.typicode.com/posts')
    .subscribe(

      (data)=>{

        this.outputSet?.push(data)},
      error=>{this.errorMessage =error},
      ()=>this.completeMessage = "ajax getJSON operator complete"
    );


  }
  onCallAjaxGetJSON(){
    this.outputSet =[]
    ajax.getJSON('https://jsonplaceholder.typicode.com/posts')
    .subscribe(

      (data)=>{

        this.outputSet?.push(data)},
      error=>{this.errorMessage =error},
      ()=>this.completeMessage = "ajax getJSON operator complete"
    );

  }

  onCallAjaxGetJSONMergeMap(){

    this.outputSet =[]
    of(1,2,3,4,5,6).pipe(
      mergeMap((id)=>{
        return ajax.getJSON(`https://jsonplaceholder.typicode.com/posts/${id}`)
      }),
     // mergeMap((obs)=>obs)
    ).subscribe(

      (data)=>{
       // this.outputSet =[]
        this.outputSet?.push(data)},
      error=>{this.errorMessage =error},
      ()=>this.completeMessage = "ajax getJSON operator with merge map complete"
    );
  }
  onCallAjaxGetJSONConcatMap(){
    this.outputSet =[]
    interval(1000).pipe(
      filter(id=>id>0),
      concatMap((id)=>{
        return ajax.getJSON(`https://jsonplaceholder.typicode.com/posts/${id}`)

      }),
     // mergeMap((obs)=>obs)
    ).subscribe(

      (data)=>{
       // this.outputSet =[]
        this.outputSet?.push(data)},
      error=>{this.errorMessage =error},
      ()=>this.completeMessage = "ajax getJSON operator with concat map complete"
    );

  }
  onCallAjaxGetJSONExhaustMap(){
    this.outputSet =[]
    interval(10).pipe(
      filter(id=>id>0),
      exhaustMap((id)=>{
        return ajax.getJSON(`https://jsonplaceholder.typicode.com/posts/${id}`)

      }),
     take(10)
    ).subscribe(

      (data)=>{
       // this.outputSet =[]
        this.outputSet?.push(data)},
      error=>{this.errorMessage =error},
      ()=>this.completeMessage = "ajax getJSON operator with exhaust map complete"
    );

  }

}
