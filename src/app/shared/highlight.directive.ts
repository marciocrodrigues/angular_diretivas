import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.deafultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() deafultColor: string = 'white';

  // Quando utilizamos o nome da diretiva com o mesmo do input
  // na tag conseguimos colocar a diretiva e o valor do input ao mesmo tempo
  @Input('highlight') highlightColor: string = 'yellow';

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.deafultColor;
  }

}
