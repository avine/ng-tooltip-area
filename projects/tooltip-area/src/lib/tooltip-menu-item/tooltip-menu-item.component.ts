import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ta-tooltip-menu-item',
  templateUrl: './tooltip-menu-item.component.html',
  styleUrls: ['./tooltip-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipMenuItemComponent {
  @Input() isLink = true;
}
