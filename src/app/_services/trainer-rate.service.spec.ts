import { TestBed } from '@angular/core/testing';

import { TrainerRateService } from './trainer-rate.service';

describe('TrainerRateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainerRateService = TestBed.get(TrainerRateService);
    expect(service).toBeTruthy();
  });
});
