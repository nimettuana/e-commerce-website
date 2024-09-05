import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UyeComponent } from './uye.component';

describe('UyeComponent', () => {
  let component: UyeComponent;
  let fixture: ComponentFixture<UyeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UyeComponent]
    });
    fixture = TestBed.createComponent(UyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
