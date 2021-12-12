import { TestBed } from '@angular/core/testing';

import { RankingJugadoresService } from './ranking-jugadores.service';

describe('RankingJugadoresService', () => {
  let service: RankingJugadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingJugadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
