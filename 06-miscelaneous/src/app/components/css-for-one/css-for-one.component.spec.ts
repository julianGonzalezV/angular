import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssForOneComponent } from './css-for-one.component';

describe('CssForOneComponent', () => {
  let component: CssForOneComponent;
  let fixture: ComponentFixture<CssForOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssForOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssForOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
