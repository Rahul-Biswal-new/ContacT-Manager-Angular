import { TestBed } from '@angular/core/testing';

import { PagenotfoundService } from './pagenotfound.service';

describe('PagenotfoundService', () => {
  let service: PagenotfoundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagenotfoundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
