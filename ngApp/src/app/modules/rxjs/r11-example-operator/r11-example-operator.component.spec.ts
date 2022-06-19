import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R11ExampleOperatorComponent } from './r11-example-operator.component';

describe('R11ExampleOperatorComponent', () => {
  let component: R11ExampleOperatorComponent;
  let fixture: ComponentFixture<R11ExampleOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R11ExampleOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R11ExampleOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
