import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifescienceComponent } from './lifescience.component';

describe('LifescienceComponent', () => {
  let component: LifescienceComponent;
  let fixture: ComponentFixture<LifescienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifescienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifescienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
