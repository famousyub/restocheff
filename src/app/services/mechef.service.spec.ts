import { TestBed } from '@angular/core/testing';

import { MechefService } from './mechef.service';

describe('MechefService', () => {
  let service: MechefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MechefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
