import { Directive, HostListener, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[appClearDblSelection]'
})
export class ClearDoubleSelectionDirective {

  constructor(
    @Inject(DOCUMENT) private _document
  ) {}

  @HostListener('click', ['$event'])
  onClick(event) {
    if (event.detail > 1) {
      if (this._document && this._document.getSelection) {
        const sel = this._document.getSelection();
        if (sel) {
          if (sel.empty) {
            sel.empty();
          } else if (sel.removeAllRanges) {
            sel.removeAllRanges();
          }
        }
      }
    }
  }
}
