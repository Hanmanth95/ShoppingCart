import { TestBed, inject } from '@angular/core/testing';

import { HomeservicehttpService } from './homeservicehttp.service';

describe('HomeservicehttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeservicehttpService]
    });
  });

  it('should be created', inject([HomeservicehttpService], (service: HomeservicehttpService) => {
    expect(service).toBeTruthy();
  }));
});
