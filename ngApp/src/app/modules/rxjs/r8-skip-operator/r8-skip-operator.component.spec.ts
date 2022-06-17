import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R8SkipOperatorComponent } from './r8-skip-operator.component';

describe('R8SkipOperatorComponent', () => {
  let component: R8SkipOperatorComponent;
  let fixture: ComponentFixture<R8SkipOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R8SkipOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R8SkipOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
