import { TestBed, inject } from '@angular/core/testing';

import { FacebookMessagesService } from './facebook-messages.service';

describe('FacebookMessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacebookMessagesService]
    });
  });

  it('should be created', inject([FacebookMessagesService], (service: FacebookMessagesService) => {
    expect(service).toBeTruthy();
  }));
});
