import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R3FunctionVsObservableComponent } from './r3-function-vs-observable.component';

describe('R3FunctionVsObservableComponent', () => {
  let component: R3FunctionVsObservableComponent;
  let fixture: ComponentFixture<R3FunctionVsObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R3FunctionVsObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R3FunctionVsObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
