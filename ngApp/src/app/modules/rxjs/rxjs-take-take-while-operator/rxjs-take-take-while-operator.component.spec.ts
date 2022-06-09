import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTakeTakeWhileOperatorComponent } from './rxjs-take-take-while-operator.component';

describe('RxjsTakeTakeWhileOperatorComponent', () => {
  let component: RxjsTakeTakeWhileOperatorComponent;
  let fixture: ComponentFixture<RxjsTakeTakeWhileOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsTakeTakeWhileOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsTakeTakeWhileOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
