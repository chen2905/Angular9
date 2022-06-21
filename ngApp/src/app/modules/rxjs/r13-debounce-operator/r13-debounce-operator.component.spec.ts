import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R13DebounceOperatorComponent } from './r13-debounce-operator.component';

describe('R13DebounceOperatorComponent', () => {
  let component: R13DebounceOperatorComponent;
  let fixture: ComponentFixture<R13DebounceOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R13DebounceOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R13DebounceOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
