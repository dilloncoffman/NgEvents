import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../../shared/event';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Subscribe to route params to use to navigate to a different component - REMEMBER to keep track of what pieces of state are within, in our case we want to make sure addMode is reset to its default false value
    this.activatedRoute.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params['id']); // + just casts string param 'id' to a number, since getEvent(id: number)
      this.addMode = false;
    });
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    // increment session id for current event
    const nextId = Math.max.apply(
      null,
      this.event.sessions.map((session) => session.id)
    );

    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
