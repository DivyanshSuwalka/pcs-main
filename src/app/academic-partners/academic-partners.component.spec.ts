import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicPartnersComponent } from './academic-partners.component';

describe('AcademicPartnersComponent', () => {
  let component: AcademicPartnersComponent;
  let fixture: ComponentFixture<AcademicPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
