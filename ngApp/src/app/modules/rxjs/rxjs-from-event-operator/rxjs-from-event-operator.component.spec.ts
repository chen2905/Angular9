import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsFromEventOperatorComponent } from './rxjs-from-event-operator.component';

describe('RxjsFromEventOperatorComponent', () => {
  let component: RxjsFromEventOperatorComponent;
  let fixture: ComponentFixture<RxjsFromEventOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsFromEventOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsFromEventOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
