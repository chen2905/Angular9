import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, retry } from 'rxjs';

@Component({
  selector: 'app-r17-catch-error-operator',
  templateUrl: './r17-catch-error-operator.component.html',
  styleUrls: ['./r17-catch-error-operator.component.css']
})
export class R17CatchErrorOperatorComponent implements OnInit {
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
  useCatchErrorOperater(){
    let source$ = new Observable((observer)=>{
      observer.next('Thanks')
      observer.next(', ')
      observer.next('God')
      observer.next('!')
      observer.error('errors, this is an intentional error');

    })

    source$.pipe(catchError((error)=>{
      return of(2,9,0,5)
    })).subscribe(
      (data) => {
        this.outputSet1.push('observer 1 reciving: ' +data);
      },
      (err) => (this.errorMessage1 = err),
      () => (this.completeMessage1 = 'observer 1 complete')

    )
  }

  useRetryOperater(){
    let source$ = new Observable((observer)=>{
      observer.next('Thanks')
      observer.next(', ')
      observer.next('God')
      observer.next('!')
      observer.error('errors, this is an intentional error');

    })

    source$.pipe(retry(1)).subscribe(
      (data) => {
        this.outputSet2.push('observer 1 reciving: ' +data);
      },
      (err) => (this.errorMessage2 = err),
      () => (this.completeMessage2 = 'observer 2 complete')

    )
  }

}
