import { TestBed } from '@angular/core/testing';

import { RickNMortyService } from './rick-nmorty.service';

describe('RickNMortyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RickNMortyService = TestBed.get(RickNMortyService);
    expect(service).toBeTruthy();
  });
});
