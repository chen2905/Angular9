import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  constructor() {}
  orderStatus: any;
  orderStatus2: any;


  observableData:Observable<any> | undefined

  observableData2:Observable<any> | undefined



  ngOnInit(): void {
    this.observableData = new Observable((observer) => {
      setTimeout(() => {
        observer.next('starting');
      }, 2000);

      setTimeout(() => {
        observer.next('in processing');
      }, 4000);

      setTimeout(() => {
        observer.next('completed');
      }, 8000);

      setTimeout(() => {
        observer.complete();
      }, 12000);


      setTimeout(() => {
        observer.next("You should not seen this, since it is happen after observation completed");
      }, 14000);

    });

this.observableData2=this.observableData
this.observableData.subscribe(data=>{
  this.orderStatus= data
})


this.observableData2.subscribe(
  data=>{
    this.orderStatus2 =data
  }
)

  }
}
