import { Component, OnInit } from '@angular/core';
import { filter, interval } from 'rxjs';

@Component({
  selector: 'app-r10-filter-operator',
  templateUrl: './r10-filter-operator.component.html',
  styleUrls: ['./r10-filter-operator.component.css']
})
export class R10FilterOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  evenNumberSet:number[]=[]
  onFiltering(){
    interval(500).pipe(
      filter(x=> x % 2==0 && x<20)
    ).subscribe(
      data=>{this.evenNumberSet.push(data)},
      error=>{console.log(error)},
      ()=>{console.log("even number filting completed")}


    )

  }
}
