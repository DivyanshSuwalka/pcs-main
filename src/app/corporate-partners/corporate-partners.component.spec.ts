import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatePartnersComponent } from './corporate-partners.component';

describe('CorporatePartnersComponent', () => {
  let component: CorporatePartnersComponent;
  let fixture: ComponentFixture<CorporatePartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporatePartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatePartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
