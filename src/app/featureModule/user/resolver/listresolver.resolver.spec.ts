import { TestBed } from '@angular/core/testing';

import { ListresolverResolver } from './listresolver.resolver';

describe('ListresolverResolver', () => {
  let resolver: ListresolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListresolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
