import { TestBed } from '@angular/core/testing';

import { JQueryService } from './j-query.service';

describe('JQueryService', () => {
  let service: JQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
