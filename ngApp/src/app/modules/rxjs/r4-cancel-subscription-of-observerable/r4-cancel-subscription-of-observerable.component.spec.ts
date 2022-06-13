import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R4CancelSubscriptionOfObserverableComponent } from './r4-cancel-subscription-of-observerable.component';

describe('R4CancelSubscriptionOfObserverableComponent', () => {
  let component: R4CancelSubscriptionOfObserverableComponent;
  let fixture: ComponentFixture<R4CancelSubscriptionOfObserverableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R4CancelSubscriptionOfObserverableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R4CancelSubscriptionOfObserverableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
