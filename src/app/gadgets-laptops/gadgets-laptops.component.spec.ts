import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetsLaptopsComponent } from './gadgets-laptops.component';

describe('GadgetsLaptopsComponent', () => {
  let component: GadgetsLaptopsComponent;
  let fixture: ComponentFixture<GadgetsLaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadgetsLaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GadgetsLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
