import { TestBed } from '@angular/core/testing';

import { TooltipAreaService } from './tooltip-area.service';

describe('TooltipAreaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TooltipAreaService = TestBed.get(TooltipAreaService);
    expect(service).toBeTruthy();
  });
});
