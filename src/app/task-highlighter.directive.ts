import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appTaskHighlighter]'
})
export class TaskHighlighterDirective implements OnInit {

  @Input() date: string;
  @Input() status: string;

  constructor(public el: ElementRef, public renderer: Renderer2) {

  }

  ngOnInit(): void {
    const dueDate = new Date(this.date).getTime();
    const now = new Date().getTime();
    // 1000 milliseconds * 60 seconds * 60 minutes * 24 hours * 2 days
    const twodays = 1000 * 60 * 60 * 24 * 2;
    if (this.status === 'Waiting') {
      if (twodays > (dueDate - now)) {
      this.renderer.addClass(this.el.nativeElement, 'w3-red');
      }
    } else if (this.status === 'InProgress') {
      if (twodays > (dueDate - now)) {
      this.renderer.addClass(this.el.nativeElement, 'w3-pale-red');
      }
    }
  }

}
