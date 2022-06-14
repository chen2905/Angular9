import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R6BufferOperatorComponent } from './r6-buffer-operator.component';

describe('R6BufferOperatorComponent', () => {
  let component: R6BufferOperatorComponent;
  let fixture: ComponentFixture<R6BufferOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R6BufferOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R6BufferOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
