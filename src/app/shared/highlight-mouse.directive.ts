import { Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'white';
  }

  // @HostBinding('style.backgroundColor') backgroundColor: string;

  // Dessa forma permite fazer algura alteração validação antes de setar o valor na varivel;
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  private backgroundColor: string;
  constructor(
    // private elementRef: ElementRef,
    // private renderer: Renderer2
  ) { }

}
