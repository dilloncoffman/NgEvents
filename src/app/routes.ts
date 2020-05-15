import { Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import {
  CreateEventComponent,
  EventsListComponent,
  EventDetailsComponent,
  EventsListResolverService,
  CreateSessionComponent,
  EventResolverService,
} from './events/index';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventsListResolverService }, // before resolving the /events route, call EventListResolver, when that resolver finishes and returns data, add that data to the route as a property named events
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    resolve: { event: EventResolverService }, // 'event:' is what's used to get the data from the route in event-details component's ngOnInit so we don't even have to make an HTTP call there, the data will be preloaded for us from the EventResolver on the route
  },
  { path: 'events/session/new', component: CreateSessionComponent },
  {
    path: '404',
    component: NotFoundComponent,
  },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
