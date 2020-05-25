import { TestBed } from '@angular/core/testing';

import { JuegoSService } from './juego-s.service';

describe('JuegoSService', () => {
  let service: JuegoSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuegoSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
