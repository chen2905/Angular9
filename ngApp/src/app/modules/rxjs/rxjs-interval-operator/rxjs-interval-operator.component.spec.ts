import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsIntervalOperatorComponent } from './rxjs-interval-operator.component';

describe('RxjsIntervalOperatorComponent', () => {
  let component: RxjsIntervalOperatorComponent;
  let fixture: ComponentFixture<RxjsIntervalOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsIntervalOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsIntervalOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
