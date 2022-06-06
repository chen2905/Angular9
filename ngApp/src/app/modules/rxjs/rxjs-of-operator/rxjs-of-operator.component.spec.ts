import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOfOperatorComponent } from './rxjs-of-operator.component';

describe('RxjsOfOperatorComponent', () => {
  let component: RxjsOfOperatorComponent;
  let fixture: ComponentFixture<RxjsOfOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsOfOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsOfOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
