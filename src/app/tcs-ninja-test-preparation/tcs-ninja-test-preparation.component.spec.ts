import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcsNinjaTestPreparationComponent } from './tcs-ninja-test-preparation.component';

describe('TcsNinjaTestPreparationComponent', () => {
  let component: TcsNinjaTestPreparationComponent;
  let fixture: ComponentFixture<TcsNinjaTestPreparationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TcsNinjaTestPreparationComponent]
    });
    fixture = TestBed.createComponent(TcsNinjaTestPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
