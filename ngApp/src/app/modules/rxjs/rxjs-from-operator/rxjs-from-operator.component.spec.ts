import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsFromOperatorComponent } from './rxjs-from-operator.component';

describe('RxjsFromOperatorComponent', () => {
  let component: RxjsFromOperatorComponent;
  let fixture: ComponentFixture<RxjsFromOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsFromOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsFromOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
