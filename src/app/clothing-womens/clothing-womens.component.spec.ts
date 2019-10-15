import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingWomensComponent } from './clothing-womens.component';

describe('ClothingWomensComponent', () => {
  let component: ClothingWomensComponent;
  let fixture: ComponentFixture<ClothingWomensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothingWomensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingWomensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
