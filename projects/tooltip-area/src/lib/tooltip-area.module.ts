import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TooltipAreaContainerComponent } from './tooltip-area-container.component';
import { TooltipAreaPopupComponent } from './tooltip-area-popup.component';
import { TooltipAreaComponent } from './tooltip-area/tooltip-area.component';
import { TooltipMenuItemComponent } from './tooltip-menu-item/tooltip-menu-item.component';
import { TooltipMenuComponent } from './tooltip-menu/tooltip-menu.component';

const components = [
  TooltipAreaContainerComponent,
  TooltipAreaPopupComponent,
  TooltipAreaComponent,
  TooltipMenuItemComponent,
  TooltipMenuComponent
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    components
  ]
})
export class TooltipAreaModule { }
