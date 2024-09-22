import { TestBed } from '@angular/core/testing';

import { FormOtpSignUpService } from './form-otp-sign-up.service';

describe('FormOtpSignUpService', () => {
  let service: FormOtpSignUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormOtpSignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
