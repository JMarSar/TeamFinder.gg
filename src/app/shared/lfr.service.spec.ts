import { TestBed } from '@angular/core/testing';

import { LfrService } from './lfr.service';

describe('LfrService', () => {
  let service: LfrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LfrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
