import { TestBed } from '@angular/core/testing';

import { ApiCalendarioService } from './api-calendario.service';

describe('ApiCalendarioService', () => {
  let service: ApiCalendarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCalendarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
