import { TestBed, inject } from '@angular/core/testing';

import { ChangeRequestsService } from './change-requests.service';

describe('ChangeRequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeRequestsService]
    });
  });

  it('should be created', inject([ChangeRequestsService], (service: ChangeRequestsService) => {
    expect(service).toBeTruthy();
  }));
});
