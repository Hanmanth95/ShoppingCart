import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetsTvsComponent } from './gadgets-tvs.component';

describe('GadgetsTvsComponent', () => {
  let component: GadgetsTvsComponent;
  let fixture: ComponentFixture<GadgetsTvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadgetsTvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GadgetsTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
