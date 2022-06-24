import { Component, OnInit } from '@angular/core';
import { filter, interval, mergeMap, Subject, take } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-r16-multicasting-with-subject',
  templateUrl: './r16-multicasting-with-subject.component.html',
  styleUrls: ['./r16-multicasting-with-subject.component.css']
})
export class R16MulticastingWithSubjectComponent implements OnInit {
  errorMessage1: string | undefined;
  completeMessage1: string | undefined;
  fromSet1: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  outputSet1: any[] = [];

  errorMessage2: string | undefined;
  completeMessage2: string | undefined;
  fromSet2: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  outputSet2: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  useSubject(){
     let oberservable$ = interval(2000)
     .pipe(

      filter(val=>val>0),
      mergeMap((id)=>{
      return ajax.getJSON(`https://jsonplaceholder.typicode.com/posts/${id}`)
      }),
      take(5)
     )
    let subject$ = new Subject <any>()
     let oberserver1 = {
     next:(data:any)=>{
      this.outputSet1.push(data)
      },
      error:(err)=>{
        this.errorMessage1 =err
      },
     complete: ()=>this.completeMessage1 ="oberverer 1 complete"
    }

    let oberserver2 = {
      next:(data:any)=>{
       this.outputSet2.push(data)
       },
       error:(err)=>{
         this.errorMessage2 =err
       },
      complete: ()=>this.completeMessage2 ="oberverer 2 complete"
     }
     subject$.subscribe(oberserver1)

     subject$.subscribe(oberserver2)

     oberservable$.subscribe(subject$)

}
}
