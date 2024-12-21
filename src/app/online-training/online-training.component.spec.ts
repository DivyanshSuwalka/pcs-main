import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTrainingComponent } from './online-training.component';

describe('OnlineTrainingComponent', () => {
  let component: OnlineTrainingComponent;
  let fixture: ComponentFixture<OnlineTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
