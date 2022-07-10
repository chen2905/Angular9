import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R23UtilityOperatorComponent } from './r23-utility-operator.component';

describe('R23UtilityOperatorComponent', () => {
  let component: R23UtilityOperatorComponent;
  let fixture: ComponentFixture<R23UtilityOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R23UtilityOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R23UtilityOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
