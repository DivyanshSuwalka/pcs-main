import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceOfAssociatesComponent } from './voice-of-associates.component';

describe('VoiceOfAssociatesComponent', () => {
  let component: VoiceOfAssociatesComponent;
  let fixture: ComponentFixture<VoiceOfAssociatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceOfAssociatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceOfAssociatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
