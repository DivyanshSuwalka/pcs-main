import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformForFreshersComponent } from './platform-for-freshers.component';

describe('PlatformForFreshersComponent', () => {
  let component: PlatformForFreshersComponent;
  let fixture: ComponentFixture<PlatformForFreshersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformForFreshersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformForFreshersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
