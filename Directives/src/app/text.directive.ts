import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appText]'
})
export class TextDirective {

  constructor(el :ElementRef) {
    el.nativeElement.innerText = 'Hello, I am Custom Directive';
   }

}
