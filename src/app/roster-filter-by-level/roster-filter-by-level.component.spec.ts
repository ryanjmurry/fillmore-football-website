import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterFilterByLevelComponent } from './roster-filter-by-level.component';

describe('RosterFilterByLevelComponent', () => {
  let component: RosterFilterByLevelComponent;
  let fixture: ComponentFixture<RosterFilterByLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosterFilterByLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterFilterByLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
