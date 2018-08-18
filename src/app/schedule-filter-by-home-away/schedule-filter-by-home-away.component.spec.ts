import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleFilterByHomeAwayComponent } from './schedule-filter-by-home-away.component';

describe('ScheduleFilterByHomeAway', () => {
  let component: ScheduleFilterByHomeAwayComponent;
  let fixture: ComponentFixture<ScheduleFilterByHomeAwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleFilterByHomeAwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleFilterByHomeAwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
