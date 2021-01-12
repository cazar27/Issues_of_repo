import { TestBed } from '@angular/core/testing';

import { IssueslistService } from './issueslist.service';

describe('IssueslistService', () => {
  let service: IssueslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
