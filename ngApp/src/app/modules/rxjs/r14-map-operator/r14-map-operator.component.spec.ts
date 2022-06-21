import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R14MapOperatorComponent } from './r14-map-operator.component';

describe('R14MapOperatorComponent', () => {
  let component: R14MapOperatorComponent;
  let fixture: ComponentFixture<R14MapOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R14MapOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R14MapOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
