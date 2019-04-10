import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  popupFlag = '';

  content = '';

  positionFixed = true;

  openTooltip(content: string) {
    this.popupFlag = 'open';
    this.content = content;
  }
}
