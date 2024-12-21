import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsdAndroidDeveloperComponent } from './fsd-android-developer.component';

describe('FsdAndroidDeveloperComponent', () => {
  let component: FsdAndroidDeveloperComponent;
  let fixture: ComponentFixture<FsdAndroidDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsdAndroidDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsdAndroidDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
