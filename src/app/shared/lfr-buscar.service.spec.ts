import { TestBed } from '@angular/core/testing';

import { LfrBuscarService } from './lfr-buscar.service';

describe('LfrBuscarService', () => {
  let service: LfrBuscarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LfrBuscarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
