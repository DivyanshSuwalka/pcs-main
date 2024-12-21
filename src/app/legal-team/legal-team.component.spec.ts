import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalTeamComponent } from './legal-team.component';

describe('LegalTeamComponent', () => {
  let component: LegalTeamComponent;
  let fixture: ComponentFixture<LegalTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
