import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoMessageComponent } from './ceo-message.component';

describe('CeoMessageComponent', () => {
  let component: CeoMessageComponent;
  let fixture: ComponentFixture<CeoMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeoMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeoMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
