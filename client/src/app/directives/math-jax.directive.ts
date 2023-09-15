import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

declare let MathJax: any;

@Directive({
  selector: '[mathJax]'
})
export class MathJaxDirective implements OnChanges {

  @Input() math = "\\varphi";

  target!: HTMLElement;

  constructor(private element: ElementRef) { }
  
  ngOnChanges() {
    this.target = this.element.nativeElement;
    this.renderMath();
  }

  private async renderMath() {
    MathJax.texReset();
    const options = MathJax.getMetricsFor(this.target);
    const node = await MathJax.tex2chtmlPromise(this.math, options);
    this.target.appendChild(node);
    MathJax.startup.document.clear();
    MathJax.startup.document.updateDocument();
  }

}
