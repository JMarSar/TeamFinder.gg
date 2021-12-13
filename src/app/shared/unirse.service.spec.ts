import { TestBed } from '@angular/core/testing';

import { UnirseService } from './unirse.service';

describe('UnirseService', () => {
  let service: UnirseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnirseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
