import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { planteGuard } from './plante.guard';

describe('planteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => planteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
