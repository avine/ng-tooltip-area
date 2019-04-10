import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ta-tooltip-menu',
  templateUrl: './tooltip-menu.component.html',
  styleUrls: ['./tooltip-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipMenuComponent {
  @Input() closeButton = true;
  @Output() close = new EventEmitter<void>();
}
