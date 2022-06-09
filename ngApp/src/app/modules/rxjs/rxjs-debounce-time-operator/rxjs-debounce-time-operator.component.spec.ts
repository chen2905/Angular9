import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDebounceTimeOperatorComponent } from './rxjs-debounce-time-operator.component';

describe('RxjsDebounceTimeOperatorComponent', () => {
  let component: RxjsDebounceTimeOperatorComponent;
  let fixture: ComponentFixture<RxjsDebounceTimeOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsDebounceTimeOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsDebounceTimeOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
