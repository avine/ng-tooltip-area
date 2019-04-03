import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ta-tooltip-menu',
  templateUrl: './tooltip-menu.component.html',
  styleUrls: ['./tooltip-menu.component.scss'],
})
export class TooltipMenuComponent implements OnInit {
  @Input() closeButton = true;

  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
