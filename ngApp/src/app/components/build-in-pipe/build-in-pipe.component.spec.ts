import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildInPipeComponent } from './build-in-pipe.component';

describe('BuildInPipeComponent', () => {
  let component: BuildInPipeComponent;
  let fixture: ComponentFixture<BuildInPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildInPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildInPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
