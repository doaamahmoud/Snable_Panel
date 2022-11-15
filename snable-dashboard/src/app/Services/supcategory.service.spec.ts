import { TestBed } from '@angular/core/testing';

import { SupcategoryService } from './supcategory.service';

describe('SupcategoryService', () => {
  let service: SupcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
