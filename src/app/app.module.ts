import { TooltipAreaModule } from 'projects/tooltip-area/src/public-api';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
