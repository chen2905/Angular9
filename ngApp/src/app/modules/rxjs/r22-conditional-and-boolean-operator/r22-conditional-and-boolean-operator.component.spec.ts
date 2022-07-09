import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R22ConditionalAndBooleanOperatorComponent } from './r22-conditional-and-boolean-operator.component';

describe('R22ConditionalAndBooleanOperatorComponent', () => {
  let component: R22ConditionalAndBooleanOperatorComponent;
  let fixture: ComponentFixture<R22ConditionalAndBooleanOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R22ConditionalAndBooleanOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R22ConditionalAndBooleanOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
