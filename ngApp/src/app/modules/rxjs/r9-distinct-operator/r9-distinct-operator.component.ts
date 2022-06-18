import { Component, OnInit } from '@angular/core';
import { distinct, distinctUntilChanged, distinctUntilKeyChanged, from, of } from 'rxjs';

@Component({
  selector: 'app-r9-distinct-operator',
  templateUrl: './r9-distinct-operator.component.html',
  styleUrls: ['./r9-distinct-operator.component.css'],
})
export class R9DistinctOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  numberSet: number[] = [];

  onDistinct() {
    of(1, 2, 3, 3, 4, 5, 5, 2, 1, 6, 7)
      .pipe(distinct())
      .subscribe(
        (data) => {
          this.numberSet.push(data);
        },
        (error) => {
          console.log(error);
        },
        () => console.log('distinct set complete')
      );
  }
  numbers = [
  1,2,2,2,2,3,3,2,3
  ];


  onDistinctUntilChanged() {

   from(this.numbers)
      .pipe(
        distinctUntilChanged()

      )
      .subscribe(
        (data) => {
          this.numberSet.push(data);
        },
        (error) => {
          console.log(error);
        },
        () => console.log('distinctUntilChanged complete')
      );
  }

  families =[
    {id:1, name:'Lynn'},

    {id:2, name:'Chen'},


    {id:3, name:'Kayleen'},


    {id:4, name:'Kayleen'},


    {id:5, name:'Ava'},
  ]
familySet:any=[]
onDistinctUntilKeyChanged(){
    from(this.families)
    .pipe(
      distinctUntilKeyChanged('name')

    )
    .subscribe(
      (data) => {
        this.familySet.push(data);
      },
      (error) => {
        console.log(error);
      },
      () => console.log('distinctUntilKeyChanged complete')
    );
  }
}
