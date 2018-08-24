import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesAddComponent } from './coaches-add.component';

describe('CoachesAddComponent', () => {
  let component: CoachesAddComponent;
  let fixture: ComponentFixture<CoachesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
