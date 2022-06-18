import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R9DistinctOperatorComponent } from './r9-distinct-operator.component';

describe('R9DistinctOperatorComponent', () => {
  let component: R9DistinctOperatorComponent;
  let fixture: ComponentFixture<R9DistinctOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R9DistinctOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R9DistinctOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
