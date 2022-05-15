import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterizedRouteComponent } from './parameterized-route.component';

describe('ParameterizedRouteComponent', () => {
  let component: ParameterizedRouteComponent;
  let fixture: ComponentFixture<ParameterizedRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameterizedRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterizedRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
