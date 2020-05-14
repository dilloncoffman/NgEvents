import { Directive, Inject, ElementRef, Input } from '@angular/core';
import { JQUERY_TOKEN } from './j-query.service';

@Directive({
  selector: '[modal-trigger]', // wrap in CSS attribute selector to indicate this is a directive and not an HTML element/component
})
export class ModalTriggerDirective {
  private el: HTMLElement; // HTMLElement is just a global JavaScript type so don't need to import above
  @Input('modal-trigger') modalId: string;

  constructor(ref: ElementRef, @Inject(JQUERY_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.el.addEventListener('click', (e) => {
      this.$(`#${this.modalId}`).modal({}); // no config params so pass empty {}
    });
  }
}
