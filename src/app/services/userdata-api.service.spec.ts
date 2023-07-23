import { TestBed } from '@angular/core/testing';

import { UserdataApiService } from './userdata-api.service';

describe('UserdataApiService', () => {
  let service: UserdataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
