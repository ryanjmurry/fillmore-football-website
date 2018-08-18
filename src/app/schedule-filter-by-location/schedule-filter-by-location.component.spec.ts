import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleFilterByLocationComponent } from './schedule-filter-by-location.component';

describe('ScheduleFilterByLocationComponent', () => {
  let component: ScheduleFilterByLocationComponent;
  let fixture: ComponentFixture<ScheduleFilterByLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleFilterByLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleFilterByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
