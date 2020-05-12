import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from 'src/app/common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // NO LONGER NEED, WE HAVE EventListResolver TO HANDLE
    // this.eventService.getEvents().subscribe((events) => {
    //   this.events = events;
    // });

    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName: string) {
    this.toastrService.success(eventName);
  }
}
