import { Component, OnInit } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  connectable,
  filter,
  interval,
  mergeMap,
  ReplaySubject,
  Subject,
  take,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-r16-multicasting-with-subject',
  templateUrl: './r16-multicasting-with-subject.component.html',
  styleUrls: ['./r16-multicasting-with-subject.component.css'],
})
export class R16MulticastingWithSubjectComponent implements OnInit {
  errorMessage1: string | undefined;
  completeMessage1: string | undefined;
  fromSet1: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  outputSet1: any[] = [];

  errorMessage2: string | undefined;
  completeMessage2: string | undefined;
  fromSet2: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  outputSet2: any[] = [];

  constructor() {}

  ngOnInit(): void {}
  useSubject() {
    let oberservable$ = interval(2000).pipe(
      filter((val) => val > 0),
      mergeMap((id) => {
        return ajax.getJSON(`https://jsonplaceholder.typicode.com/posts/${id}`);
      }),
      take(5)
    );
    let subject$ = new Subject<any>();
    let oberserver1 = {
      next: (data: any) => {
        this.outputSet1.push(data);
      },
      error: (err) => {
        this.errorMessage1 = err;
      },
      complete: () => (this.completeMessage1 = 'oberverer 1 complete'),
    };

    let oberserver2 = {
      next: (data: any) => {
        this.outputSet2.push(data);
      },
      error: (err) => {
        this.errorMessage2 = err;
      },
      complete: () => (this.completeMessage2 = 'oberverer 2 complete'),
    };
    subject$.subscribe(oberserver1);

    subject$.subscribe(oberserver2);

    oberservable$.subscribe(subject$);
  }

  usebehaviorSubject() {
    let behaviorSubject$ = new BehaviorSubject(0);

    this.outputSet1 = [];
    this.outputSet2 = [];
    behaviorSubject$.subscribe((data) => {
      this.outputSet1.push('observer 1: ' + data);
    });

    behaviorSubject$.next(1);

    behaviorSubject$.subscribe((data) => {
      this.outputSet2.push('observer 2 reciving: ' + data);
    });
    setTimeout(() => {
      behaviorSubject$.next(2);
    }, 2000);

    setTimeout(() => {
      behaviorSubject$.next(3);
    }, 2000);
  }

  usereplaySubject() {
    let replaySubject$ = new ReplaySubject();

    this.outputSet1 = [];
    this.outputSet2 = [];

    replaySubject$.next(1);
    replaySubject$.subscribe((data) => {
      this.outputSet1.push('observer 1: ' + data);
    });
    replaySubject$.next(2);

    setTimeout(() => {
      replaySubject$.next(3);
    }, 3000);

    setTimeout(() => {
      replaySubject$.subscribe((data) => {
        this.outputSet2.push('observer 2 reciving: ' + data);
      });
    }, 2000);

    replaySubject$.next(4);
  }

  useAsyncSubject() {
    let asyncSubject$ = new AsyncSubject();
    this.outputSet1 = [];
    this.outputSet2 = [];

    setTimeout(() => {
      asyncSubject$.subscribe((data) => {
        this.outputSet1.push('observer 1 reciving: ' + data);
      });
    }, 2000);

    asyncSubject$.next(1);
    asyncSubject$.next(2);
    asyncSubject$.next(3);
    setTimeout(() => {
      asyncSubject$.subscribe((data) => {
        this.outputSet2.push('observer 2 reciving: ' + data);
      });
    }, 2000);

    asyncSubject$.complete();
    asyncSubject$.next(4); //won't be received
  }

  useVoidSubject() {
    let voidSubject$ = new Subject<void>();

    this.outputSet1 = [];
    this.outputSet2 = [];

    voidSubject$.subscribe(
      (data) => {
        this.outputSet2.push('observer 2 reciving: ');
      },
      (err) => (this.errorMessage2 = err),
      () => (this.completeMessage2 = 'observer 2 complete')
    );

    voidSubject$.subscribe((data) => {
      this.outputSet1.push('observer 1 reciving: ');
    });

    voidSubject$.next();
    voidSubject$.next();
  }
  useBehaviorSubject() {
    this.outputSet1 = [];
    this.outputSet2 = [];
    let source$ = connectable(interval(1000),{
      connector:()=>new BehaviorSubject(100),
    })

    source$.subscribe(
      (data) => {
        this.outputSet1.push('observer 1 reciving: ' +data);
      },
      (err) => (this.errorMessage1 = err),
      () => (this.completeMessage1 = 'observer 1 complete')

    )

     setTimeout(() => {
      source$.subscribe(
        (data) => {
          this.outputSet2.push('observer 2 reciving: ' +data);
        },
        (err) => (this.errorMessage2 = err),
        () => (this.completeMessage2 = 'observer2 complete')

      )
     }, 4000);

     source$.connect()


  }

  useAsynSubjectInConnectable(){
    this.outputSet1 = [];
    this.outputSet2 = [];
    let source$ = connectable(interval(1000).pipe(take(4)),{
      connector:()=>new AsyncSubject(),
    })

    source$.subscribe(
      (data) => {
        this.outputSet1.push('observer 1 reciving: ' +data);
      },
      (err) => (this.errorMessage1 = err),
      () => (this.completeMessage1 = 'observer 1 complete')

    )

     setTimeout(() => {
      source$.subscribe(
        (data) => {
          this.outputSet2.push('observer 2 reciving: ' +data);
        },
        (err) => (this.errorMessage2 = err),
        () => (this.completeMessage2 = 'observer2 complete')

      )
     }, 4000);

     source$.connect()
  }

  useReplaySubjectInConnectable(){
    this.outputSet1 = [];
    this.outputSet2 = [];
    let source$ = connectable(interval(1000),{
      connector:()=>new ReplaySubject(),
    })

    source$.subscribe(
      (data) => {
        this.outputSet1.push('observer 1 reciving: ' +data);
      },
      (err) => (this.errorMessage1 = err),
      () => (this.completeMessage1 = 'observer 1 complete')

    )

     setTimeout(() => {
      source$.subscribe(
        (data) => {
          this.outputSet2.push('observer 2 reciving: ' +data);
        },
        (err) => (this.errorMessage2 = err),
        () => (this.completeMessage2 = 'observer2 complete')

      )
     }, 4000);

     source$.connect()
  }

}
