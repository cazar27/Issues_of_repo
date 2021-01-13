import { TestBed } from '@angular/core/testing';
import { UrlvalueService } from './urlvalue.service';

describe('UrlvalueService', () => {
  let service: UrlvalueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlvalueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
