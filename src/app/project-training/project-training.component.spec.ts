import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTrainingComponent } from './project-training.component';

describe('ProjectTrainingComponent', () => {
  let component: ProjectTrainingComponent;
  let fixture: ComponentFixture<ProjectTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
