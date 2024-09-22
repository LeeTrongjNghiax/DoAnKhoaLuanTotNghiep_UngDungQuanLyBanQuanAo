import { TestBed } from '@angular/core/testing';

import { FormUserForgotPasswordService } from './form-user-forgot-password.service';

describe('FormUserForgotPasswordService', () => {
  let service: FormUserForgotPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormUserForgotPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
