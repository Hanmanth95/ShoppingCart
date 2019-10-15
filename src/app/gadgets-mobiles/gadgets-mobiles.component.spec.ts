import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetsMobilesComponent } from './gadgets-mobiles.component';

describe('GadgetsMobilesComponent', () => {
  let component: GadgetsMobilesComponent;
  let fixture: ComponentFixture<GadgetsMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadgetsMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GadgetsMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
