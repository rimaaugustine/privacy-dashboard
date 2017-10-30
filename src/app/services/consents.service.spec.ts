import { TestBed, inject } from '@angular/core/testing';

import { ConsentsService } from './consents.service';

describe('ConsentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsentsService]
    });
  });

  it('should be created', inject([ConsentsService], (service: ConsentsService) => {
    expect(service).toBeTruthy();
  }));
});
