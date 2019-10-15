import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootwearWomenComponent } from './footwear-women.component';

describe('FootwearWomenComponent', () => {
  let component: FootwearWomenComponent;
  let fixture: ComponentFixture<FootwearWomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootwearWomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootwearWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
