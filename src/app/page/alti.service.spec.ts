/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AltiService } from './alti.service';

describe('Service: Alti', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AltiService]
    });
  });

  it('should ...', inject([AltiService], (service: AltiService) => {
    expect(service).toBeTruthy();
  }));
});