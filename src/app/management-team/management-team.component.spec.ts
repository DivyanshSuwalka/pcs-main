import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementTeamComponent } from './management-team.component';

describe('ManagementTeamComponent', () => {
  let component: ManagementTeamComponent;
  let fixture: ComponentFixture<ManagementTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
