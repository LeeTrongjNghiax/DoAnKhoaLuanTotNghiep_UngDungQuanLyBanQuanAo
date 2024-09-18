import { TestBed } from '@angular/core/testing';

import { FormUserAddService } from './form-user-add.service';

describe('FormUserAddService', () => {
  let service: FormUserAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormUserAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
