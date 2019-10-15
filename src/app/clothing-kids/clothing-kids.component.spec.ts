import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingKidsComponent } from './clothing-kids.component';

describe('ClothingKidsComponent', () => {
  let component: ClothingKidsComponent;
  let fixture: ComponentFixture<ClothingKidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothingKidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
