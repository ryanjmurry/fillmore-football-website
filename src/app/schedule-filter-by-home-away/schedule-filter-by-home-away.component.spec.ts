import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleFilterByHomeAway } from './schedule-filter-by-home-away.component';

describe('ScheduleFilterByHomeAway', () => {
  let component: ScheduleFilterByHomeAway;
  let fixture: ComponentFixture<ScheduleFilterByHomeAway>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleFilterByHomeAway ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleFilterByHomeAway);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
