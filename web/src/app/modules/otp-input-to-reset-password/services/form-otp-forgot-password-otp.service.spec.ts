import { TestBed } from '@angular/core/testing';

import { FormOtpForgotPasswordOtpService } from './form-otp-forgot-password-otp.service';

describe('FormOtpForgotPasswordOtpService', () => {
  let service: FormOtpForgotPasswordOtpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormOtpForgotPasswordOtpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
