import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css'],
})
export class RxjsLearningComponent implements OnInit {
  constructor() {}

  agents: Observable<string> | undefined;
  agentName: string | undefined;
  ngOnInit(): void {
    this.agents = new Observable(function (observer) {
      try {
        observer.next('thanks');

        setInterval(() => {
          observer.next('you');
        }, 3000);

        setInterval(() => {
          observer.next('mighty');
        }, 6000);

        setInterval(() => {
          observer.next('god!');
        }, 9000);
      } catch (e) {
        observer.error(e);
      }
    });
    this.agents.subscribe((data) => {
      this.agentName = data;
    });
  }
}
