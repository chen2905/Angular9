import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, interval, map, mapTo, take } from 'rxjs';

@Component({
  selector: 'app-r14-map-operator',
  templateUrl: './r14-map-operator.component.html',
  styleUrls: ['./r14-map-operator.component.css'],
})
export class R14MapOperatorComponent implements OnInit, AfterViewInit {
  constructor() {}
  errorMessage: string | undefined;
  completeMessage: string | undefined;
  fromSet: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  outputSet: any[] = [];
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let buttonClickEvent = fromEvent(
      document.getElementById('btnMap')!,
      'click'
    );

    buttonClickEvent.pipe(
      map((event: Event) => {
        return {
          x: (event as PointerEvent).clientX,
          y: (event as PointerEvent).clientY,
        };
      })
    ).subscribe(
      (data)=>this.outputSet?.push(data),
      error=>{this.errorMessage =error},
      ()=>this.completeMessage = "map operator complete"
    );
  }

  onMapTo(){
    interval(1000).pipe(
      take(9),
      mapTo("Thanks God")
    ).subscribe(
      (data)=>this.outputSet?.push(data),
      error=>{this.errorMessage =error},
      ()=>this.completeMessage = "mapTo operator complete"
    );
  }

}
