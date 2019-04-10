import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipAreaComponent } from './tooltip-area.component';

describe('TooltipAreaComponent', () => {
  let component: TooltipAreaComponent;
  let fixture: ComponentFixture<TooltipAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
