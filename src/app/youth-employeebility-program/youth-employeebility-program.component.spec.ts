import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthEmployeebilityProgramComponent } from './youth-employeebility-program.component';

describe('YouthEmployeebilityProgramComponent', () => {
  let component: YouthEmployeebilityProgramComponent;
  let fixture: ComponentFixture<YouthEmployeebilityProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YouthEmployeebilityProgramComponent]
    });
    fixture = TestBed.createComponent(YouthEmployeebilityProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
