import { TestBed } from '@angular/core/testing';

import { EMailService } from './e-mail.service';

describe('EMailService', () => {
  let service: EMailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EMailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
