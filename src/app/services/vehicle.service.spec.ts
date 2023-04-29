import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Vehicle } from '../models/vehicle';
import { faker } from '@faker-js/faker';
import { VehicleService } from './vehicle.service';

class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
}

describe('VehicleService', () => {
  let service: VehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VehicleService,
        {
          provide: HttpClient,
          useClass: HttpClientMock
        }
      ]
    });
    service = TestBed.inject(VehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
