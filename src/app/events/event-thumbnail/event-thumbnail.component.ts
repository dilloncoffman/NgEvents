import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;

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
