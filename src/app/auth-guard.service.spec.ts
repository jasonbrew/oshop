import { TestBed, inject } from '@angular/core/testing';

import { AuthGaurd } from './auth-guard.service';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGaurd]
    });
  });

  it('should be created', inject([AuthGaurd], (service: AuthGaurd) => {
    expect(service).toBeTruthy();
  }));
});
