import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsFirstLastElementAtOperatorComponent } from './rxjs-first-last-element-at-operator.component';

describe('RxjsFirstLastElementAtOperatorComponent', () => {
  let component: RxjsFirstLastElementAtOperatorComponent;
  let fixture: ComponentFixture<RxjsFirstLastElementAtOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsFirstLastElementAtOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsFirstLastElementAtOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
