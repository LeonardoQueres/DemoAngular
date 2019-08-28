import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[HighLightMouse]'
})
export class HighLightMouseDirective {
  
    possibleColors = [
      'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
      'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
    ];

    @HostBinding('style.color') color: string;
    @HostBinding('style.backgroundColor') borderColor: string;

    @HostListener('mouseleave') mouseLeave(){
      //this._renderer.setElementStyle(this._elementRef.nativeElement, 'backgroundColor', 'white');
      const colorPick = Math.floor(Math.random() * this.possibleColors.length);
      this.color = 'black';
      this.borderColor = this.possibleColors[colorPick];
    };
    @HostListener('mouseenter') onmouseover(){
      //this._renderer.setElementStyle(this._elementRef.nativeElement, 'backgroundColor', 'yellow');
      const colorPick = Math.floor(Math.random() * this.possibleColors.length);
      this.color = 'black';
      this.borderColor = this.possibleColors[colorPick];
    };

    constructor() { }
  // private _elementRef: ElementRef,
  //   private _renderer: Renderer

}
