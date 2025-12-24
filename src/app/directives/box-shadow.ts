import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBoxShadow]',
})
export class BoxShadow {

  @Input('appBoxShadow') boxShadow: string = '5px 5px 5px grey';

  constructor(private ele:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.boxShadow = this.boxShadow;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.boxShadow = '';
  }
}
