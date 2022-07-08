import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R21CounterOperationComponent } from './r21-counter-operation.component';

describe('R21CounterOperationComponent', () => {
  let component: R21CounterOperationComponent;
  let fixture: ComponentFixture<R21CounterOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R21CounterOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R21CounterOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
