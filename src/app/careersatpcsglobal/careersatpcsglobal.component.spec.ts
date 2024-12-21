import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersatpcsglobalComponent } from './careersatpcsglobal.component';

describe('CareersatpcsglobalComponent', () => {
  let component: CareersatpcsglobalComponent;
  let fixture: ComponentFixture<CareersatpcsglobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersatpcsglobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersatpcsglobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
