import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R20CreationOperatorComponent } from './r20-creation-operator.component';

describe('R20CreationOperatorComponent', () => {
  let component: R20CreationOperatorComponent;
  let fixture: ComponentFixture<R20CreationOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R20CreationOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R20CreationOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
