import { TestBed } from '@angular/core/testing';

import { ReplaysocketService } from './replaysocket.service';

describe('ReplaysocketService', () => {
  let service: ReplaysocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplaysocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
