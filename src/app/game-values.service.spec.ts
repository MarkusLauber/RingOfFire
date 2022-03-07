import { TestBed } from '@angular/core/testing';

import { GameValuesService } from './game-values.service';

describe('GameValuesService', () => {
  let service: GameValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
