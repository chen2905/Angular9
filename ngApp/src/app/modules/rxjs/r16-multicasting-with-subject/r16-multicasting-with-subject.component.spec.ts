import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R16MulticastingWithSubjectComponent } from './r16-multicasting-with-subject.component';

describe('R16MulticastingWithSubjectComponent', () => {
  let component: R16MulticastingWithSubjectComponent;
  let fixture: ComponentFixture<R16MulticastingWithSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R16MulticastingWithSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R16MulticastingWithSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
