import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ta-tooltip-area-container',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipAreaContainerComponent {}
