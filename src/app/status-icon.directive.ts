import { Directive, Input, OnChanges, Renderer2, ElementRef, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appStatusIcon]'
})
export class StatusIconDirective implements OnChanges {
  @Input() iconName: string;
  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.renderer.removeClass(this.el.nativeElement, 'fa-exclamation');
    this.renderer.removeClass(this.el.nativeElement, 'fa-clock-o');
    this.renderer.removeClass(this.el.nativeElement, 'fa-check');
    this.renderer.removeClass(this.el.nativeElement, 'fa-question');
    if (this.iconName === 'Waiting') {
      this.renderer.addClass(this.el.nativeElement, 'fa-exclamation');
    } else if (this.iconName === 'InProgress') {
      this.renderer.addClass(this.el.nativeElement, 'fa-clock-o');
    } else if (this.iconName === 'Done') {
      this.renderer.addClass(this.el.nativeElement, 'fa-check');
    } else {
      this.renderer.addClass(this.el.nativeElement, 'fa-question');
    }
  }
}
