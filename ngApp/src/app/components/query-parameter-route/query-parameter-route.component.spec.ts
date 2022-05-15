import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParameterRouteComponent } from './query-parameter-route.component';

describe('QueryParameterRouteComponent', () => {
  let component: QueryParameterRouteComponent;
  let fixture: ComponentFixture<QueryParameterRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryParameterRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryParameterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
