import { TestBed } from '@angular/core/testing';

import { FormUserUpdateService } from './form-user-update.service';

describe('FormUserUpdateService', () => {
  let service: FormUserUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormUserUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
