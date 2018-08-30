import { TestBed, inject } from '@angular/core/testing';

import { PeliculaServiceService } from './pelicula-service.service';

describe('PeliculaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeliculaServiceService]
    });
  });

  it('should be created', inject([PeliculaServiceService], (service: PeliculaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
