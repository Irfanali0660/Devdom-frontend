import { TestBed } from '@angular/core/testing';

import { ListresolverService } from './listresolver.service';

describe('ListresolverService', () => {
  let service: ListresolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListresolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
