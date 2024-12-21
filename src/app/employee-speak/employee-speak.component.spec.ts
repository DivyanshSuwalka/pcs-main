import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSpeakComponent } from './employee-speak.component';

describe('EmployeeSpeakComponent', () => {
  let component: EmployeeSpeakComponent;
  let fixture: ComponentFixture<EmployeeSpeakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSpeakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSpeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
