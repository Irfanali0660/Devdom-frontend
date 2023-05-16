import { TestBed } from '@angular/core/testing';

import { BlockuserGuard } from './blockuser.guard';

describe('BlockuserGuard', () => {
  let guard: BlockuserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BlockuserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
