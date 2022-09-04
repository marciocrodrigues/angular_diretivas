import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // Antes dos [] caso coloque a tag html, a diretiva será aplicada somente nessa tag
  // A documentação pedi para não utilizar o ElementRef, pois o mesmo altera o DOM diretamente, trazendo vulnerabilidade
  // Utilizar o renderer
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { 
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    )
  }

}
