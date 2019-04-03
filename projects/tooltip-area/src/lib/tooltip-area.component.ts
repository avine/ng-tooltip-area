import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { TooltipAreaCoord, TooltipAreaPopupFlag, TooltipAreaSize } from './tooltip-area.model';

@Component({
  selector: 'ta-tooltip-area',
  templateUrl: './tooltip-area.component.html',
  styleUrls: ['./tooltip-area.component.scss'],
  animations: [
    trigger('animatePopup', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate('200ms ease')),
    ]),
  ]
})
export class TooltipAreaComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('container') container: ElementRef;
  @ViewChild('popup') popup: ElementRef;

  @Input() positionFixed = false;

  @Input() popupFlag: TooltipAreaPopupFlag = '';
  @Output() popupFlagChange = new EventEmitter<TooltipAreaPopupFlag>(true); // isAsync === true

  private preventPopupCloseFlag = false;

  popupVisible = false;

  popupPosition = { left: 0, top: 0 };

  private closePopupHandler = () => this.popupVisible = false;

  constructor() { }

  ngOnInit() {
    if (window) {
      window.addEventListener('resize', this.closePopupHandler);
    }
  }

  ngOnDestroy() {
    if (window) {
      window.removeEventListener('resize', this.closePopupHandler);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.popupFlag && !changes.popupFlag.firstChange) {
      this.popupFlagHandler(changes.popupFlag.currentValue);
    }
  }

  private popupFlagHandler(popupFlag: TooltipAreaPopupFlag) {
    console.log(`Popup flag: ${popupFlag || 'default'}`);
    switch (popupFlag) {
      case 'open': {
        // If the `popupFlag` change was triggered by a click event on the `#container`,
        // then the method `containerClickHandler` is going to be called and the popup will be closed immediately!
        // For this reason, we need to prevent `containerClickHandler` from closing the popup.
        this.preventPopupCloseFlag = true;

        this.popupVisible = true;
        this.resetPopupFlag();
        break;
      }
      case 'close': {
        this.popupVisible = false;
        this.resetPopupFlag();
        break;
      }
      default: {
        // If the `popupFlag` change was NOT triggered by a click event (but programmatically),
        // then the method `containerClickHandler` is NOT going to be called.
        // For this reason, the best place to restore the `preventPopupCloseFlag` is here.
        this.preventPopupCloseFlag = false;
        break;
      }
    }
  }

  private resetPopupFlag() {
    this.popupFlag = '';
    this.popupFlagChange.emit('');
  }

  containerClickHandler(event: MouseEvent) {
    console.log('Container click handler');

    if (!this.preventPopupCloseFlag) {
      // Clicking anywhere inside the container closes the popup (unless `preventPopupCloseFlag` is true)
      this.popupVisible = false;
    }

    if (this.popupVisible) {
      if (this.positionFixed) {
        this.setPopupPositionFixed(event);
      } else {
        this.setPopupPositionAbsolute(event);
      }
    }
  }

  private setPopupPositionFixed(event: MouseEvent) {
    const pointerCoord = {
      x: event.clientX,
      y: event.clientY,
    };
    const viewportSize = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    };
    this.setPopupPosition(pointerCoord, viewportSize);
  }

  private setPopupPositionAbsolute(event: MouseEvent) {
    const { x, y } = this.getRealOffsetToContainer(event.target as HTMLElement);
    const pointerCoord = {
      x: event.offsetX + x,
      y: event.offsetY + y,
    };
    const containerSize = {
      width: this.container.nativeElement.offsetWidth,
      height: this.container.nativeElement.offsetHeight,
    };
    this.setPopupPosition(pointerCoord, containerSize);
  }

  private setPopupPosition(coord: TooltipAreaCoord, size: TooltipAreaSize) {
    const popupSize = {
      width: this.popup.nativeElement.offsetWidth,
      height: this.popup.nativeElement.offsetHeight,
    };

    const border = 20;

    const popupShift = {
      x: Math.max(0, coord.x + popupSize.width - size.width + border),
      y: Math.max(0, coord.y + popupSize.height - size.height + border),
    };

    this.popupPosition = {
      left: coord.x - popupShift.x,
      top: coord.y - popupShift.y,
    };

    console.log('popupPosition', this.popupPosition);
  }

  private getRealOffsetToContainer(fromTarget: HTMLElement): TooltipAreaCoord {
    const offset = { x: 0, y: 0 };
    let parent = fromTarget;
    do {
      if (window.getComputedStyle(parent).position !== 'static') {
        offset.x += parent.offsetLeft;
        offset.y += parent.offsetTop;
      }
      parent = parent.parentNode as HTMLElement;
    } while (
      parent && parent !== this.container.nativeElement
    );
    return offset;
  }

  popupClickHandler(event: MouseEvent) {
    console.log('Popup click handler');

    // Clicking on the popup should NOT trigger the `containerClickHandler`.
    event.stopPropagation();
  }
}

