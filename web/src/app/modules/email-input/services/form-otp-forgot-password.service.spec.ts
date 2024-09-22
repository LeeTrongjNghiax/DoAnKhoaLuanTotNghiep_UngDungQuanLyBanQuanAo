import { TestBed } from '@angular/core/testing';

import { FormOtpForgotPasswordService } from './form-otp-forgot-password.service';

describe('FormOtpForgotPasswordService', () => {
  let service: FormOtpForgotPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormOtpForgotPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
