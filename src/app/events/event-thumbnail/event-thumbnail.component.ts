import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../shared/event';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;

  constructor() {}

  ngOnInit(): void {}

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return {
      green: isEarlyStart,
      bold: isEarlyStart,
    };
  }
}
