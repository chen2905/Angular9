import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R7TakeOperatorComponent } from './r7-take-operator.component';

describe('R7TakeOperatorComponent', () => {
  let component: R7TakeOperatorComponent;
  let fixture: ComponentFixture<R7TakeOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R7TakeOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R7TakeOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
