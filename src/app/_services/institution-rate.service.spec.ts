import { TestBed } from '@angular/core/testing';

import { InstitutionRateService } from './institution-rate.service';

describe('InstitutionRateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstitutionRateService = TestBed.get(InstitutionRateService);
    expect(service).toBeTruthy();
  });
});
