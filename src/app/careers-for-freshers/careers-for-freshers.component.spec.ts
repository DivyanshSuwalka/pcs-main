import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersForFreshersComponent } from './careers-for-freshers.component';

describe('CareersForFreshersComponent', () => {
  let component: CareersForFreshersComponent;
  let fixture: ComponentFixture<CareersForFreshersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersForFreshersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersForFreshersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
