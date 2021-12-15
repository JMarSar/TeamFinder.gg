import { TestBed } from '@angular/core/testing';

import { CrearEquipoService } from './crear-equipo.service';

describe('CrearEquipoService', () => {
  let service: CrearEquipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearEquipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
