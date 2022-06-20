import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R12FirstLastOperatorComponent } from './r12-first-last-operator.component';

describe('R12FirstLastOperatorComponent', () => {
  let component: R12FirstLastOperatorComponent;
  let fixture: ComponentFixture<R12FirstLastOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R12FirstLastOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R12FirstLastOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
