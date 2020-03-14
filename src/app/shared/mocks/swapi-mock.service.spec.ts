import { TestBed } from '@angular/core/testing';

import { SwapiMockService } from './swapi-mock.service';

describe('SwapiMockService', () => {
  let service: SwapiMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwapiMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
