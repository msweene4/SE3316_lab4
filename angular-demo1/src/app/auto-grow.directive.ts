import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appAutoGrow]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})
export class AutoGrowDirective {
  
  constructor(private el: ElementRef, private rend: Renderer) {
    
    
  }
  
  onFocus(){
    this.rend.setElementStyle(this.el.nativeElement, 'width', '200px');
  }
  
  onBlur(){
    this.rend.setElementStyle(this.el.nativeElement, 'width', '120px');
  }
  
  

}
