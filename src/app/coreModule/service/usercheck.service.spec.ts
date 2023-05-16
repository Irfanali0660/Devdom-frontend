import { TestBed } from '@angular/core/testing';

import { UsercheckService } from './usercheck.service';

describe('UsercheckService', () => {
  let service: UsercheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsercheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
