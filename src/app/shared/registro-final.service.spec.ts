import { TestBed } from '@angular/core/testing';

import { RegistroFinalService } from './registro-final.service';

describe('RegistroFinalService', () => {
  let service: RegistroFinalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroFinalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
