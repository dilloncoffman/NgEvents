import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { ActivatedRoute } from '@angular/router';
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
    this.event = this.eventService.getEvent(
      +this.activatedRoute.snapshot.params['id'] // + just casts string of id to a number, since getEvent expects id to be of type number
    );
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
