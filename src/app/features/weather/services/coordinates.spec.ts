import { TestBed } from '@angular/core/testing';

import { Coordinates } from './coordinates';

describe('Coordinates', () => {
  let service: Coordinates;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Coordinates);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
