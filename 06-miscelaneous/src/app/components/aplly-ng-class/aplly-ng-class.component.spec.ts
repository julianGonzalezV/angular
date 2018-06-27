import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApllyNgClassComponent } from './aplly-ng-class.component';

describe('ApllyNgClassComponent', () => {
  let component: ApllyNgClassComponent;
  let fixture: ComponentFixture<ApllyNgClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApllyNgClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApllyNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
