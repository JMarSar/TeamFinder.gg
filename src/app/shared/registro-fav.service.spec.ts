import { TestBed } from '@angular/core/testing';

import { RegistroFavService } from './registro-fav.service';

describe('RegistroFavService', () => {
  let service: RegistroFavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroFavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
