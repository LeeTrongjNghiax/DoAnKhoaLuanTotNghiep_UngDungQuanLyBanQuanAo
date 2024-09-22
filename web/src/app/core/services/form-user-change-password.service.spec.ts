import { TestBed } from '@angular/core/testing';

import { FormUserChangePasswordService } from './form-user-change-password.service';

describe('FormUserChangePasswordService', () => {
  let service: FormUserChangePasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormUserChangePasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
