import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;
  newEvent;

  constructor(
    private eventService: EventService,
    private routerService: Router
  ) {}

  ngOnInit(): void {}

  saveEvent(formValues) {
    console.log(formValues);
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false; // route guard in place for CreateEventComponent /events/new route, set to false to allow us to navigate away programmatically
      this.routerService.navigate(['/events']);
    });
  }

  cancel() {
    this.routerService.navigate(['/events']);
  }
}
