import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {

  @Input('appHighlight') highlightColor: string = 'green';

  // ele:ElementRef = new ElementRef('');

  constructor(private ele:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.backgroundColor = '';
  }
}
