import { TestBed } from '@angular/core/testing';

import { BuscarEquipoService } from './buscar-equipo.service';

describe('BuscarEquipoService', () => {
  let service: BuscarEquipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarEquipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
