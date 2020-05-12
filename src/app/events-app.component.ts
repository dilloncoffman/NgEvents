import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `<events-list></events-list>`,
  styleUrls: ['./app.component.css'],
})
export class EventsAppComponent {
  title = 'Ng Events';
}
