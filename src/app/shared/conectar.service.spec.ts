import { TestBed } from '@angular/core/testing';

import { ConectarService } from './conectar.service';

describe('ConectarService', () => {
  let service: ConectarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
