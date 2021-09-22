import { TestBed } from '@angular/core/testing';

import { BusDetailService } from './bus-detail.service';

describe('BusDetailService', () => {
  let service: BusDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
