import { TestBed } from '@angular/core/testing';

import { NewUnitService } from './new-unit.service';

describe('NewUnitService', () => {
  let service: NewUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
