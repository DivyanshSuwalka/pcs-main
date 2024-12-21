import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgThemeVideoComponent } from './org-theme-video.component';

describe('OrgThemeVideoComponent', () => {
  let component: OrgThemeVideoComponent;
  let fixture: ComponentFixture<OrgThemeVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgThemeVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgThemeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
