import { TestBed } from '@angular/core/testing';

import { ComputadorasjsonService } from './computadorasjson.service';

describe('ComputadorasjsonService', () => {
  let service: ComputadorasjsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputadorasjsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
