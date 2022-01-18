import { TestBed } from '@angular/core/testing';

import { DatosJuegoService } from './datos-juego.service';

describe('DatosJuegoService', () => {
  let service: DatosJuegoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosJuegoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
