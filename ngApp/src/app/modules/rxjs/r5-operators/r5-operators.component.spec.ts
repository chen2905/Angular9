import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R5OperatorsComponent } from './r5-operators.component';

describe('R5OperatorsComponent', () => {
  let component: R5OperatorsComponent;
  let fixture: ComponentFixture<R5OperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R5OperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R5OperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
