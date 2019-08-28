import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[HighLightMouse]'
})
export class HighLightMouseDirective {
  @HostListener('mouseLeave') onmouse(){
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'backgroundColor', 'white');
  };
  @HostListener('mouseenter') onmouseover(){
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'backgroundColor', 'yellow');
  };

 

  constructor(private _elementRef: ElementRef,
    private _renderer: Renderer) { }

}
