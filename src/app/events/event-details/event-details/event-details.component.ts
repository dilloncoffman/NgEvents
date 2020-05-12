import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.event = this.eventService.getEvent(
      +this.activatedRoute.snapshot.params['id'] // + just casts string of id to a number, since getEvent expects id to be of type number
    );
  }
}
