import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R19SchedulerOperatorComponent } from './r19-scheduler-operator.component';

describe('R19SchedulerOperatorComponent', () => {
  let component: R19SchedulerOperatorComponent;
  let fixture: ComponentFixture<R19SchedulerOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R19SchedulerOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R19SchedulerOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
