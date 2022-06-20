import { Component, OnInit } from '@angular/core';
import { first, from, of } from 'rxjs';

@Component({
  selector: 'app-r12-first-last-operator',
  templateUrl: './r12-first-last-operator.component.html',
  styleUrls: ['./r12-first-last-operator.component.css'],
})
export class R12FirstLastOperatorComponent implements OnInit {
  constructor() {}
  errorMessage: string | undefined;
  completeMessage: string | undefined;
  fromNumberSet: number[] = [1, 2, 3, 4, 5, 6];
  outputNumberSet: number[] =[];
  ngOnInit(): void {}
  onFirstClick() {
  from(this.fromNumberSet).pipe(first((value: any) => value % 2 == 0))
    .subscribe(
      (data)=>this.outputNumberSet?.push(data),
      error=>{this.errorMessage =error},
      ()=>this.completeMessage = "first operator complete"
    );
  }
}
