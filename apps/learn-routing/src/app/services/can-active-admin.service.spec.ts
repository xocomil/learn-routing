import { TestBed } from '@angular/core/testing';

import { CanActiveAdminService } from './can-active-admin.service';

describe('CanActiveAdminService', () => {
  let service: CanActiveAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActiveAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
