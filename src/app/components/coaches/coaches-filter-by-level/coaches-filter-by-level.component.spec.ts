import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesFilterByLevelComponent } from './coaches-filter-by-level.component';

describe('CoachesFilterByLevelComponent', () => {
  let component: CoachesFilterByLevelComponent;
  let fixture: ComponentFixture<CoachesFilterByLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachesFilterByLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachesFilterByLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
