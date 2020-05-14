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
  @Input() closeOnBodyClick: string;
  @ViewChild('modalcontainer') containerEl: ElementRef;

  constructor(@Inject(JQUERY_TOKEN) private $: any) {}

  ngOnInit(): void {}

  closeModal(): void {
    if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }
}
