import { TestBed } from '@angular/core/testing';

import { TipoPartidaService } from './tipo-partida.service';

describe('TipoPartidaService', () => {
  let service: TipoPartidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoPartidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
