import { TestBed } from '@angular/core/testing';

import { CogerIdService } from './coger-id.service';

describe('CogerIdService', () => {
  let service: CogerIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CogerIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
