import { TestBed } from '@angular/core/testing';

import { CollectionsMockService } from './collections-mock.service';

describe('CollectionsMockService', () => {
  let service: CollectionsMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionsMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
