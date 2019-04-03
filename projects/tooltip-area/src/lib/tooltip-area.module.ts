import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TooltipAreaContainerComponent } from './tooltip-area-container.component';
import { TooltipAreaPopupComponent } from './tooltip-area-popup.component';
import { TooltipAreaComponent } from './tooltip-area.component';
import { TooltipMenuItemComponent } from './tooltip-menu/tooltip-menu-item/tooltip-menu-item.component';
import { TooltipMenuComponent } from './tooltip-menu/tooltip-menu.component';

@NgModule({
  declarations: [
    TooltipAreaContainerComponent,
    TooltipAreaPopupComponent,
    TooltipAreaComponent,
    TooltipMenuItemComponent,
    TooltipMenuComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    TooltipAreaContainerComponent,
    TooltipAreaPopupComponent,
    TooltipAreaComponent,
    TooltipMenuItemComponent,
    TooltipMenuComponent
  ]
})
export class TooltipAreaModule { }
