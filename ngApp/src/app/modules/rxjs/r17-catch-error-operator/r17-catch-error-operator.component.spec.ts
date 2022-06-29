import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R17CatchErrorOperatorComponent } from './r17-catch-error-operator.component';

describe('R17CatchErrorOperatorComponent', () => {
  let component: R17CatchErrorOperatorComponent;
  let fixture: ComponentFixture<R17CatchErrorOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R17CatchErrorOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R17CatchErrorOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
