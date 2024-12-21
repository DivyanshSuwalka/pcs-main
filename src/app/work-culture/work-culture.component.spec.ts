import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCultureComponent } from './work-culture.component';

describe('WorkCultureComponent', () => {
  let component: WorkCultureComponent;
  let fixture: ComponentFixture<WorkCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkCultureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
