import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ta-tooltip-area-popup',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipAreaPopupComponent {}
