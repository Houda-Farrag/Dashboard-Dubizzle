import { TestBed } from '@angular/core/testing';

import { SubCategoriesServiceService } from './sub-categories-service.service';

describe('SubCategoriesServiceService', () => {
  let service: SubCategoriesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubCategoriesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
