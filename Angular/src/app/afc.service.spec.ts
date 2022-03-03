import { TestBed } from '@angular/core/testing';

import { AFCService } from './afc.service';

describe('AFCService', () => {
  let service: AFCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AFCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
