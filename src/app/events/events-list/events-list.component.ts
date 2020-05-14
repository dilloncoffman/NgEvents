import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // NO LONGER NEED, WE HAVE EventListResolver TO HANDLE
    // this.eventService.getEvents().subscribe((events) => {
    //   this.events = events;
    // });

    this.events = this.route.snapshot.data['events'];
  }
}
