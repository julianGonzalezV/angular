import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNgSwitchComponent } from './example-ng-switch.component';

describe('ExampleNgSwitchComponent', () => {
  let component: ExampleNgSwitchComponent;
  let fixture: ComponentFixture<ExampleNgSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleNgSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
