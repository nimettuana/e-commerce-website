import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UyeliksizComponent } from './uyeliksiz.component';

describe('UyeliksizComponent', () => {
  let component: UyeliksizComponent;
  let fixture: ComponentFixture<UyeliksizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UyeliksizComponent]
    });
    fixture = TestBed.createComponent(UyeliksizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
