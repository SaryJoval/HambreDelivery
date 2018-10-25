import { TestBed, inject } from '@angular/core/testing';

import { HambreServiceService } from './hambre-service.service';

describe('HambreServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HambreServiceService]
    });
  });

  it('should be created', inject([HambreServiceService], (service: HambreServiceService) => {
    expect(service).toBeTruthy();
  }));
});
