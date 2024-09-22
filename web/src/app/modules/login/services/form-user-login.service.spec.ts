import { TestBed } from '@angular/core/testing';

import { FormUserLoginService } from './form-user-login.service';

describe('FormUserLoginService', () => {
  let service: FormUserLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormUserLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
