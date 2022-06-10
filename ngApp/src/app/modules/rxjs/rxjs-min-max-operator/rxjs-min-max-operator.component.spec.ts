import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMinMaxOperatorComponent } from './rxjs-min-max-operator.component';

describe('RxjsMinMaxOperatorComponent', () => {
  let component: RxjsMinMaxOperatorComponent;
  let fixture: ComponentFixture<RxjsMinMaxOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsMinMaxOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsMinMaxOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
