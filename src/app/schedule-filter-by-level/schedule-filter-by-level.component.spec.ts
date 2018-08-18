import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleFilterByLevelComponent } from './schedule-filter-by-level.component';

describe('ScheduleFilterByLevelComponent', () => {
  let component: ScheduleFilterByLevelComponent;
  let fixture: ComponentFixture<ScheduleFilterByLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleFilterByLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleFilterByLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
