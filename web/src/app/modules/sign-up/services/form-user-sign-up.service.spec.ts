import { TestBed } from '@angular/core/testing';

import { FormUserSignUpService } from './form-user-sign-up.service';

describe('FormUserSignUpService', () => {
  let service: FormUserSignUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormUserSignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
