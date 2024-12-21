import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsdJavaDeveloperComponent } from './fsd-java-developer.component';

describe('FsdJavaDeveloperComponent', () => {
  let component: FsdJavaDeveloperComponent;
  let fixture: ComponentFixture<FsdJavaDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsdJavaDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsdJavaDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
