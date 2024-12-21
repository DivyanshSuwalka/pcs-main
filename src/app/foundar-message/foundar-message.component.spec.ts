import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundarMessageComponent } from './foundar-message.component';

describe('FoundarMessageComponent', () => {
  let component: FoundarMessageComponent;
  let fixture: ComponentFixture<FoundarMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundarMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundarMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
