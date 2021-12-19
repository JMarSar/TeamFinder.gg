import { TestBed } from '@angular/core/testing';

import { HayAdminService } from './hay-admin.service';

describe('HayAdminService', () => {
  let service: HayAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HayAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
