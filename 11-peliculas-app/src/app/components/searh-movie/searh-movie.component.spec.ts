import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearhMovieComponent } from './searh-movie.component';

describe('SearhMovieComponent', () => {
  let component: SearhMovieComponent;
  let fixture: ComponentFixture<SearhMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearhMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearhMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
