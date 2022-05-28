import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagingModeComponent } from './staging-mode.component';

describe('StagingModeComponent', () => {
  let component: StagingModeComponent;
  let fixture: ComponentFixture<StagingModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagingModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StagingModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
