import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  @Input() defaultColor: string = 'white';
  @Input('Highlight') HighlightColor: string = 'darksalmon';

  @HostBinding('style.backgroundColor') groundColor: string;

  @HostListener('mouseleave') mouseLeave(){
    this.groundColor = this.defaultColor;
  };

  @HostListener('mouseenter') onmouseover(){
    this.groundColor = this.HighlightColor;
  };

  constructor() { }

  ngOnInit() { 
    this.groundColor = this. HighlightColor;  
  }
}
