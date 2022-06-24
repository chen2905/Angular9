import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R16ColdHotObservableComponent } from './r16-cold-hot-observable.component';

describe('R16ColdHotObservableComponent', () => {
  let component: R16ColdHotObservableComponent;
  let fixture: ComponentFixture<R16ColdHotObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R16ColdHotObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R16ColdHotObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
