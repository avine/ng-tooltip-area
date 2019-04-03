import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ta-tooltip-menu-item',
  templateUrl: './tooltip-menu-item.component.html',
  styleUrls: ['./tooltip-menu-item.component.scss'],
})
export class TooltipMenuItemComponent implements OnInit {
  @Input() isLink = true;

  constructor() { }

  ngOnInit() {
  }

}
