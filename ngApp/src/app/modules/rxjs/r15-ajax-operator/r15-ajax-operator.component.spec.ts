import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R15AjaxOperatorComponent } from './r15-ajax-operator.component';

describe('R15AjaxOperatorComponent', () => {
  let component: R15AjaxOperatorComponent;
  let fixture: ComponentFixture<R15AjaxOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R15AjaxOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R15AjaxOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
