import { Directive, ElementRef, Renderer, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[highlight]' })
export class HighlightDirective {

    constructor(public el: ElementRef, public renderer: Renderer) {}

    @Input() highlight: boolean;

    ngOnInit(){
        // Use renderer to render the element with styles
        //console.log(this.myHidden)
        if(this.highlight) {            
            this.renderer.setElementStyle(this.el.nativeElement, 'border-style', 'solid');
            this.renderer.setElementStyle(this.el.nativeElement, 'border-color', 'green');
        }
    }
}

@Directive({ selector: '[myIf]' })
export class IfDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }

  @Input() set myIf(shouldAdd: boolean) {
    if (shouldAdd) {
      // If condition is true add template to DOM
      console.log(this.templateRef.elementRef);
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
     // Else remove template from DOM
      this.viewContainer.clear();
    }
  }

} 