import { TestBed } from '@angular/core/testing';

import { MenuLateralService } from './menu-lateral.service';

describe('MenuLateralService', () => {
  let service: MenuLateralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuLateralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
