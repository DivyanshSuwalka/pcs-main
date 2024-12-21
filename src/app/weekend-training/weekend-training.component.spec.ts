import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekendTrainingComponent } from './weekend-training.component';

describe('WeekendTrainingComponent', () => {
  let component: WeekendTrainingComponent;
  let fixture: ComponentFixture<WeekendTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekendTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekendTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
