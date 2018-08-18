import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleFilterByTypeComponent } from './schedule-filter-by-type.component';

describe('ScheduleFilterByTypeComponent', () => {
  let component: ScheduleFilterByTypeComponent;
  let fixture: ComponentFixture<ScheduleFilterByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleFilterByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleFilterByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
