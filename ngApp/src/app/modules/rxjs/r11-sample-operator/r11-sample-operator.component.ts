import { Component, OnInit } from '@angular/core';
import { audit, interval, sample, throttle } from 'rxjs';

@Component({
  selector: 'app-r11-sample-operator',
  templateUrl: './r11-sample-operator.component.html',
  styleUrls: ['./r11-sample-operator.component.css'],
})
export class R11SampleOperatorComponent implements OnInit {
  constructor() {}
  numberSet: number[] = [];
  ngOnInit(): void {}
  onExampleClick() {
    interval(500)
      .pipe(sample(interval(2000)))
      .subscribe(
        (data) => this.numberSet.push(data),
        (error) => console.log(error),
        () => console.log('sample interval is completed')
      );
  }

  onAuditClick() {
    interval(1000)
      .pipe(audit((value) => interval(2000)))
      .subscribe(
        (data) => this.numberSet.push(data),
        (error) => console.log(error),
        () => console.log('audit interval is completed')
      );
  }

  onThrotteClick() {
    interval(1000)
      .pipe(
        throttle((value) => interval(3000), { leading: true, trailing: true })
      )
      .subscribe(
        (data) => this.numberSet.push(data),
        (error) => console.log(error),
        () => console.log('throtte interval is completed')
      );
  }
}
