import { TestBed } from '@angular/core/testing';

import { CarsCollectionStoreService } from './cars-collection-store.service';

describe('CarsCollectionStoreService', () => {
  let service: CarsCollectionStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsCollectionStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
