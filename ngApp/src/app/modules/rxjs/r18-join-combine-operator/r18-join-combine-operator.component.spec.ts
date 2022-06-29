import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R18JoinCombineOperatorComponent } from './r18-join-combine-operator.component';

describe('R18JoinCombineOperatorComponent', () => {
  let component: R18JoinCombineOperatorComponent;
  let fixture: ComponentFixture<R18JoinCombineOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R18JoinCombineOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R18JoinCombineOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
