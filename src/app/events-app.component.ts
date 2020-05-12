import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class EventsAppComponent {
  title = 'Ng Events';
}
