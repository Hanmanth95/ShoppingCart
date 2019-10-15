import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootwearMenComponent } from './footwear-men.component';

describe('FootwearMenComponent', () => {
  let component: FootwearMenComponent;
  let fixture: ComponentFixture<FootwearMenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootwearMenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootwearMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
