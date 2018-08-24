import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesEditComponent } from './coaches-edit.component';

describe('CoachesEditComponent', () => {
  let component: CoachesEditComponent;
  let fixture: ComponentFixture<CoachesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
