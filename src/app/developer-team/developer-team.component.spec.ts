import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperTeamComponent } from './developer-team.component';

describe('DeveloperTeamComponent', () => {
  let component: DeveloperTeamComponent;
  let fixture: ComponentFixture<DeveloperTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeveloperTeamComponent]
    });
    fixture = TestBed.createComponent(DeveloperTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
