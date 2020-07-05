import { TestBed } from '@angular/core/testing';

import { ImageUpdloadService } from './image-updload.service';

describe('ImageUpdloadService', () => {
  let service: ImageUpdloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageUpdloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
