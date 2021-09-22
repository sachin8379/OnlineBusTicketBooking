import { TestBed } from '@angular/core/testing';

import { SelectedBusService } from './selected-bus.service';

describe('SelectedBusService', () => {
  let service: SelectedBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
