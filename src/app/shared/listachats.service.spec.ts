import { TestBed } from '@angular/core/testing';

import { ListachatsService } from './listachats.service';

describe('ListachatsService', () => {
  let service: ListachatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListachatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
