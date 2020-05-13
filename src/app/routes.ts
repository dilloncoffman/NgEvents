import { Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import {
  CreateEventComponent,
  EventsListComponent,
  EventDetailsComponent,
  EventRouteActivatorService,
  EventsListResolverService,
  CreateSessionComponent,
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
    canActivate: [EventRouteActivatorService],
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
