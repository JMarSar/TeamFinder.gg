import { TestBed } from '@angular/core/testing';

import { RegistroAdminService } from './registro-admin.service';

describe('RegistroAdminService', () => {
  let service: RegistroAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
