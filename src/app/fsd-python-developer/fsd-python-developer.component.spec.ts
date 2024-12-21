import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsdPythonDeveloperComponent } from './fsd-python-developer.component';

describe('FsdPythonDeveloperComponent', () => {
  let component: FsdPythonDeveloperComponent;
  let fixture: ComponentFixture<FsdPythonDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsdPythonDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsdPythonDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
