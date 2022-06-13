import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-r4-cancel-subscription-of-observerable',
  templateUrl: './r4-cancel-subscription-of-observerable.component.html',
  styleUrls: ['./r4-cancel-subscription-of-observerable.component.css']
})
export class R4CancelSubscriptionOfObserverableComponent implements OnInit {

  constructor() { }
  observableDisplay:any
  selfDefineObservableDisplay:any
  subcription:Subscription|undefined
  selfDefinedSubcription:Subscription|undefined
  observable$ = interval(1000);

  selfDefinedObservable$ = new Observable <number>((observer)=>{
    let i =0

    let interval = setInterval(()=>{
      console.log('self Defined observable executing');
      observer.next(i++);
    },1000);

    return ()=>{
      console.log('self defined observable is unsubscribed')
      clearInterval(interval)
    }

  })



  ngOnInit(): void {

    this.subcription= this.observable$.subscribe(data=>{
      this.observableDisplay =new Date().toLocaleTimeString() +' '+ data}

    )

    this.selfDefinedSubcription= this.selfDefinedObservable$.subscribe(data=>{
      this.selfDefineObservableDisplay =new Date().toLocaleTimeString() +' '+ data}

    )

}

stopSubscription() {
  this.subcription?.unsubscribe()
  this.observableDisplay =new Date().toLocaleTimeString() +' subscripion stoped'

  this.selfDefinedSubcription?.unsubscribe()
  this.selfDefineObservableDisplay =new Date().toLocaleTimeString() +'self subscripion stoped'
}
}


