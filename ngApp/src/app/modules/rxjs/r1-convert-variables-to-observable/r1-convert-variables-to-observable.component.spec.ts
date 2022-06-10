import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R1ConvertVariablesToObservableComponent } from './r1-convert-variables-to-observable.component';

describe('R1ConvertVariablesToObservableComponent', () => {
  let component: R1ConvertVariablesToObservableComponent;
  let fixture: ComponentFixture<R1ConvertVariablesToObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R1ConvertVariablesToObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R1ConvertVariablesToObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
