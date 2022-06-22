import { Component, OnInit } from '@angular/core';
import { off } from 'process';
import { interval, map, mergeMap,of } from 'rxjs';
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
    ajax('https://jsonplaceholder.typicode.com/posts')
    .subscribe(

      (data)=>{
        this.outputSet =[]
        this.outputSet?.push(data)},
      error=>{this.errorMessage =error},
      ()=>this.completeMessage = "ajax getJSON operator complete"
    );


  }
  onCallAjaxGetJSON(){
    ajax.getJSON('https://jsonplaceholder.typicode.com/posts')
    .subscribe(

      (data)=>{
        this.outputSet =[]
        this.outputSet?.push(data)},
      error=>{this.errorMessage =error},
      ()=>this.completeMessage = "ajax getJSON operator complete"
    );

  }

  onCallAjaxGetJSONMergeMap(){
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
}
