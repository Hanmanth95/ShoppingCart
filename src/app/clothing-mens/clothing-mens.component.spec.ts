import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingMensComponent } from './clothing-mens.component';

describe('ClothingMensComponent', () => {
  let component: ClothingMensComponent;
  let fixture: ComponentFixture<ClothingMensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothingMensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingMensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
