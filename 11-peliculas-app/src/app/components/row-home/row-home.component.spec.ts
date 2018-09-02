import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowHomeComponent } from './row-home.component';

describe('RowHomeComponent', () => {
  let component: RowHomeComponent;
  let fixture: ComponentFixture<RowHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
