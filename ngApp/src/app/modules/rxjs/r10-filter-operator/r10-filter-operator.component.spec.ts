import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R10FilterOperatorComponent } from './r10-filter-operator.component';

describe('R10FilterOperatorComponent', () => {
  let component: R10FilterOperatorComponent;
  let fixture: ComponentFixture<R10FilterOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R10FilterOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R10FilterOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
