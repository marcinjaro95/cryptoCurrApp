import { TestBed } from '@angular/core/testing';

import { MetaService } from './meta.service';

describe('MetasService', () => {
  let service: MetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
