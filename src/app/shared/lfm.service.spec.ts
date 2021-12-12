import { TestBed } from '@angular/core/testing';

import { LfmService } from './lfm.service';

describe('LfmService', () => {
  let service: LfmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LfmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
