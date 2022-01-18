import { TestBed } from '@angular/core/testing';

import { TorneosApuntadoService } from './torneos-apuntado.service';

describe('TorneosApuntadoService', () => {
  let service: TorneosApuntadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TorneosApuntadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
