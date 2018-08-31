import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRowHomeComponent } from './movie-row-home.component';

describe('MovieRowHomeComponent', () => {
  let component: MovieRowHomeComponent;
  let fixture: ComponentFixture<MovieRowHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieRowHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieRowHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
