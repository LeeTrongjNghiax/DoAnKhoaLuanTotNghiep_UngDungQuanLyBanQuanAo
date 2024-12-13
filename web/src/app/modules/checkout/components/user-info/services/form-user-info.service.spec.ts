import { TestBed } from '@angular/core/testing';

import { FormUserInfoService } from './form-user-info.service';

describe('FormUserInfoService', () => {
  let service: FormUserInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormUserInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
