import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  @HostBinding('style.boxShadow') boxShadow = "2px 2px 12px blue";

  constructor() { }

  @HostListener('mouseenter') mouseOver(): void{
    this.boxShadow = "2px 2px 12px red";
  }
  @HostListener('mouseleave') mouseLeave(): void{
    this.boxShadow = "2px 2px 12px blue";
  }
}
