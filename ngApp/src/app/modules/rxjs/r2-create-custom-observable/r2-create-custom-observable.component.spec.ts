import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R2CreateCustomObservableComponent } from './r2-create-custom-observable.component';

describe('R2CreateCustomObservableComponent', () => {
  let component: R2CreateCustomObservableComponent;
  let fixture: ComponentFixture<R2CreateCustomObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R2CreateCustomObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R2CreateCustomObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
