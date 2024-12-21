import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentOutsourcingComponent } from './talent-outsourcing.component';

describe('TalentOutsourcingComponent', () => {
  let component: TalentOutsourcingComponent;
  let fixture: ComponentFixture<TalentOutsourcingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentOutsourcingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentOutsourcingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
