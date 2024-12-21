import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomTrainingComponent } from './classroom-training.component';

describe('ClassroomTrainingComponent', () => {
  let component: ClassroomTrainingComponent;
  let fixture: ComponentFixture<ClassroomTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
