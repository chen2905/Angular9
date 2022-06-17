import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, of, skip, skipLast, skipUntil, skipWhile, take } from 'rxjs';

@Component({
  selector: 'app-r8-skip-operator',
  templateUrl: './r8-skip-operator.component.html',
  styleUrls: ['./r8-skip-operator.component.css']
})
export class R8SkipOperatorComponent implements OnInit {

  constructor() { }
 buttonClickEvent! : Observable<Event>
 numbers:number[]=[]
  ngOnInit(): void {
this.buttonClickEvent =fromEvent(document.getElementById('btnSkipUntil')!,'click')

interval(500).pipe(skipUntil(this.buttonClickEvent)).subscribe(
  data=> this.numbers.push(data)
)
  }
  onSkip(){
    interval(500).pipe(
      skip(9),
      take(5)
    ).subscribe(
      data=>{
        console.log(data)
      },
      error=>{console.log(error)},
      ()=>console.log("skip then take complete")
    )
  }
  onSkipLast(){
   of(1,2,3,4,5,6,7,8,9,10).pipe(

      skipLast(5),

    ).subscribe(
      data=>{
        console.log(data)
      },
      error=>{console.log(error)},
      ()=>console.log("take then skip last complete")
    )
  }
  onSkipWhile(){
    of(1,2,3,4,5,6,7,8,9,10).pipe(

      skipWhile(x=>x<5),

    ).subscribe(
      data=>{
        console.log(data)
      },
      error=>{console.log(error)},
      ()=>console.log("take then skip while complete")
    )
  }

}
