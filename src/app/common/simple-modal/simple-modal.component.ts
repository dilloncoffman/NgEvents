import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  Inject,
} from '@angular/core';
import { JQUERY_TOKEN } from '../j-query.service';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css'],
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;
  @ViewChild('modalcontainer') containerEl: ElementRef;

  constructor(@Inject(JQUERY_TOKEN) private $: any) {}

  ngOnInit(): void {}

  closeModal(): void {
    this.$(this.containerEl.nativeElement).modal('hide');
  }
}
